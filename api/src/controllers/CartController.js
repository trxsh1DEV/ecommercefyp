import Cart from '../models/Cart';

class HomeController {
  async index(req, res) {
    try {
      const carts = await Cart.find();
      return res.status(200).json(carts);
    } catch (err) {
      return res.status(500).json({ errors: ['Falha ao buscar produtos no carrinho', err.message.split(', ')] });
    }
  }

  async show(req, res) {
    try {
      const cart = await Cart.findOne({ userId: req.userId });
      if (!cart) {
        return res.status(400).json({ errors: ['Carrinho não encontrado'] });
      }
      return res.status(200).json(cart);
    } catch (err) {
      return res.status(400).json({ errors: ['Falha ao buscar carrinho', err.message.split(', ')] });
    }
  }

  async store(req, res) {
    const newCart = new Cart(req.body);

    try {
      const savedCart = await newCart.save();
      return res.status(200).json(savedCart);
    } catch (err) {
      return res.status(500).json({ errors: ['Falha ao adicionar produto ao carrinho', err.message.split(', ')] });
    }
  }

  async update(req, res) {
    try {
      const updatedCart = await Cart.findByIdAndUpdate(req.userId, req.body, { new: true });
      if (!updatedCart) {
        return res.status(400).json({ errors: ['Produto do carrinho não encontrado'] });
      }

      return res.status(200).json(updatedCart);
    } catch (err) {
      return res.status(400).json({ errors: ['Falha ao atualizar carrinho', err.message.split(', ')] });
    }
  }

  async delete(req, res) {
    try {
      const deletedCart = await Cart.findByIdAndDelete(req.userId);
      if (!deletedCart) {
        return res.status(400).json({ errors: ['Produto do carrinho não encontrado'] });
      }
      console.log('');
      return res.status(200).json('O produto foi deletado com sucesso!');
    } catch (err) {
      return res.status(400).json({ errors: ['Falha ao deletar carrinho', err.message.split(', ')] });
    }
  }
}

export default new HomeController();
