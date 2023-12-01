import { isValidObjectId } from 'mongoose';
import UserModel from '../models/User';

class UserController {
  async index(req, res) {
    const query = req.query.new;
    // console.log(req);

    // console.log(req.isAdmin);
    try {
      if (!req.userIsAdmin) {
        return res
          .status(401)
          .json({ errors: ['Você não tem esse nivel de acesso'] });
      }

      const users = query
        ? await UserModel.find().sort({ createdIn: -1 })
        : await UserModel.find(
            {},
            'username email id isAdmin telephone verified avatar createdAt',
          );
      return res.status(200).json(users);
    } catch (err) {
      return res.status(500).json({
        errors: ['Tivemos um problema interno', err.message.split(', ')],
      });
    }
  }

  async register(req, res) {
    const newUser = new UserModel(req.body);
    // console.log(newUser);

    try {
      console.log('oi');
      const savedUser = await newUser.save();
      console.log(savedUser);
      const { username, email, id } = savedUser;
      return res.status(201).json({ username, email, id });
    } catch (err) {
      console.log('oi');
      let removeContent = err.message.indexOf(':');

      // return res.status(400).json({
      //   errors: [err.message.split(', ')],
      // });

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
          return [e];
        }),
      });
    }
  }

  async show(req, res) {
    try {
      // const user = await UserModel.findById(req.userId);
      const user = await UserModel.findById(req.params.id);
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
      const user = await UserModel.findByIdAndUpdate(req.userId, req.body, {
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
      const removedUser = await UserModel.findByIdAndDelete(id);

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
  // async delete(req, res) {
  //   try {
  //     const user = await UserModel.findOneAndDelete({ _id: req.userId });

  //     if (!user) {
  //       return res.status(400).json({ errors: ['Usuário não encontrado'] });
  //     }

  //     return res
  //       .status(200)
  //       .json(`Usuário '${user.username}' foi deletado com sucesso`);
  //   } catch (err) {
  //     let removeContent = err.message.indexOf(':');
  //     removeContent !== -1
  //       ? (removeContent = err.message
  //           .substring(removeContent + 1)
  //           .trim()
  //           .split(', '))
  //       : (removeContent = err.message.split(', '));

  //     return res.status(400).json({
  //       errors: removeContent.map((e) => e),
  //     });
  //   }
  // }

  async stats(req, res) {
    const date = new Date();
    const lastYear = new Date(date.setFullYear(date.getFullYear() - 1));

    try {
      const data = await UserModel.aggregate([
        { $match: { createdAt: { $gte: lastYear } } },
        {
          $project: {
            month: { $month: '$createdAt' },
          },
        },
        {
          $group: {
            _id: '$month',
            total: { $sum: 1 },
          },
        },
      ]);

      // return res.status(200).json(
      //   data.map((item) => ({
      //     name: item._id, // Renomeia _id para name
      //     total: item.total, // Mantém o campo total
      //   })),
      // );
      return res.status(200).json(data);
    } catch (err) {
      return res.status(500).json({
        errors: [
          'Falha ao tentar obter estatísticas de usuários',
          err.message.split(', '),
        ],
      });
    }
  }
}

export default new UserController();
