import { isValidObjectId } from 'mongoose';
import Customer from '../models/Customer';

class CustomerController {
  async index(req, res) {
    // const query = req.query.new;
    const customers = await Customer.find().sort({ createdIn: -1 });
    console.log(customers);
    try {
      if (!req.userIsAdmin) {
        return res
          .status(401)
          .json({ errors: ['Você não tem esse nivel de acesso'] });
      }

      // const users = query
      //   ? await Customer.find().sort({ _id: -1 })
      //   : await Customer.find({}, 'username email id isAdmin');
      return res.status(200).json(customers);
    } catch (err) {
      return res.status(500).json({
        errors: ['Tivemos um problema interno', err.message.split(', ')],
      });
    }
  }

  async store(req, res) {
    const customer = new Customer(req.body);
    console.log(customer);

    try {
      if (!customer) res.status(400).json({ errors: ['Cliente inválido'] });
      const saveCustomer = await customer.save();

      return res.status(200).json(saveCustomer);
    } catch (err) {
      let removeContent = err.message.indexOf(':');

      removeContent !== -1
        ? (removeContent = err.message
            .substring(removeContent + 1)
            .trim()
            .split(', '))
        : (removeContent = err.message.split(', '));

      return res.status(400).json({
        errors: removeContent.map((e) => e),
      });
    }
  }

  async show(req, res) {
    try {
      // const user = await Customer.findById(req.userId);
      const user = await Customer.findById(req.params.id);
      if (!user) {
        return res.status(400).json('Usuario não encontrado');
      }
      const { email, username, isAdmin, id } = user;

      return res.status(200).json({
        username,
        email,
        isAdmin,
        id,
      });
    } catch (err) {
      return res.status(401).json({
        errors: ['ID inválido', err.message.split(', ')],
      });
    }
  }

  async update(req, res) {
    try {
      const user = await Customer.findByIdAndUpdate(req.userId, req.body, {
        new: true,
      });

      if (!user) {
        return res.status(400).json({ errors: ['Usuário não encontrado'] });
      }

      const { email, username, id } = user;

      return res.status(200).json({ username, email, id });
    } catch (err) {
      let removeContent = err.message.indexOf(':');
      removeContent !== -1
        ? (removeContent = err.message
            .substring(removeContent + 1)
            .trim()
            .split(', '))
        : (removeContent = err.message.split(', '));

      return res.status(400).json({
        errors: removeContent.map((e) => {
          const changeText = 'dup key';
          if (e.includes(changeText)) {
            const keyUnique = e.match(/"([^"]+)"/g);
            return `O e-mail '${keyUnique[0].slice(1, -1)}' já está em uso`;
          }
          return e;
        }),
      });
    }
  }

  async delete(req, res) {
    const { id } = req.params;
    if (!id || !isValidObjectId(id)) {
      return res.status(400).json({ errors: ['ID inválido'] });
    }
    try {
      const removedUser = await Customer.findByIdAndDelete(id);

      if (!removedUser) {
        return res.status(400).json({ errors: ['Usuário não encontrado'] });
      }

      const { email } = removedUser;

      return res
        .status(201)
        .json(`O usuário ${email} foi removido com sucesso`);
    } catch (err) {
      let removeContent = err.message.indexOf(':');
      removeContent !== -1
        ? (removeContent = err.message
            .substring(removeContent + 1)
            .trim()
            .split(', '))
        : (removeContent = err.message.split(', '));

      return res.status(400).json({
        errors: removeContent.map((e) => e),
      });
    }
  }
}

export default new CustomerController();
