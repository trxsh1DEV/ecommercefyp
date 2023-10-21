import { isValidObjectId } from 'mongoose';
import Product from '../models/Product';

class ProductController {
  async index(req, res) {
    const qNew = req.query.new;
    const qCategory = req.query.category;

    try {
      let query = Product.find(); // Consulta base

      if (qNew) {
        query = query.sort({ createdAt: -1 }).limit(1);
      }

      if (qCategory) {
        query = query.where('categories').in([qCategory]);
      }

      query = query.select('code title description srcImg categories color price');
      const products = await query.exec();
      console.log(products);

      return res.status(200).json(products);
    } catch (err) {
      return res.status(500).json({ errors: ['Falha ao buscar produtos', err.message.split(', ')] });
    }
  }

  async store(req, res) {
    const newProduct = new Product(req.body);

    try {
      const savedProduct = await newProduct.save();
      return res.status(200).json(savedProduct);
    } catch (err) {
      let removeContent = err.message.indexOf(':');

      removeContent !== -1
        ? removeContent = err.message.substring(removeContent + 1).trim().split(', ')
        : removeContent = err.message.split(', ');

      return res.status(500).json({
        errors: removeContent.map((e) => e),
      });
    }
  }

  async update(req, res) {
    try {
      const { id } = req.params;
      if (!id || !isValidObjectId(id)) {
        return res.status(400).json({ errors: ['ID inválido'] });
      }
      const updateProduct = await Product.findByIdAndUpdate(id, req.body, { new: true });

      if (!updateProduct) {
        return res.status(400).json({ errors: ['Produto não encontrado'] });
      }

      const {
        _id, createdAt, updatedAt, __v, ...product
      } = updateProduct._doc;

      return res.status(201).json(product);
    } catch (err) {
      let removeContent = err.message.indexOf(':');
      removeContent !== -1
        ? removeContent = err.message.substring(removeContent + 1).trim().split(', ')
        : removeContent = err.message.split(', ');

      return res.status(400).json({
        errors: removeContent.map((e) => e),
      });
    }
  }

  async delete(req, res) {
    const { id } = req.params;
    if (!id || !isValidObjectId(id)) {
      return res.status(400).json({ errors: ['ID inválido'] });
    }
    try {
      const removeProduct = await Product.findByIdAndDelete(id);

      if (!removeProduct) {
        return res.status(400).json({ errors: ['Produto não encontrado'] });
      }

      const { title, _id } = removeProduct;

      return res.status(201).json(`O produto '${title}' foi removido com sucesso, ID: ${_id}`);
    } catch (err) {
      return res.status(500).json({
        errors: ['Falha ao tentar remover produto', err.message.split(', ')],
      });
    }
  }

  async show(req, res) {
    const { id } = req.params;
    if (!id || !isValidObjectId(id)) {
      return res.status(400).json({ errors: ['ID inválido'] });
    }
    try {
      const product = await Product.findById(id);

      if (!product) {
        return res.status(400).json({ errors: ['Produto não encontrado'] });
      }

      return res.status(200).json(product);
    } catch (err) {
      return res.status(400).json({
        errors: ['Falha ao procurar produto', err.message.split(', ')],
      });
    }
  }
}

export default new ProductController();
