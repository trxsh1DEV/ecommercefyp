import UserModel from '../models/User';

class UserController {
  async index(req, res) {
    const query = req.query.new;

    try {
      console.log(req.userIsAdmin);
      if (!req.userIsAdmin) {
        return res.status(401).json({ errors: ['Você não tem esse nivel de acesso'] });
      }

      const users = query ? await UserModel.find().sort({ _id: -1 }).limit(10)
        : await UserModel.find({}, 'username email id');
      return res.status(200).json(users);
    } catch (err) {
      return res.status(500).json({ errors: ['Tivemos um problema interno'] });
    }
  }

  async show(req, res) {
    try {
      const user = await UserModel.findById(req.userId);
      if (!user) {
        return res.status(400).json('Usuario não encontrado');
      }
      const { email, username, isAdmin } = user;

      return res.status(200).json({ username, email, isAdmin });
    } catch (err) {
      return res.status(401).json({
        errors: ['ID inválido'],
      });
    }
  }

  async update(req, res) {
    try {
      // const { id } = req.params;
      // if (!id || !isValidObjectId(id)) {
      //   return res.status(400).json({ errors: ['ID inválido'] });
      // }

      const user = await UserModel.findByIdAndUpdate(req.userId, req.body, { new: true });

      if (!user) {
        return res.status(400).json({ errors: ['Usuário não encontrado'] });
      }

      const { email, username } = user;

      return res.status(200).json({ username, email });
    } catch (err) {
      let removeContent = err.message.indexOf(':');

      if (removeContent !== -1) {
        removeContent = err.message.substring(removeContent + 1).trim().split(', ');
      }

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
    try {
      // const { id } = req.params;
      // if (!id || !isValidObjectId(id)) {
      //   return res.status(400).json({ errors: ['ID inválido'] });
      // }

      const user = await UserModel.findOneAndDelete({ _id: req.userId });

      if (!user) {
        return res.status(400).json({ errors: ['Usuário não encontrado'] });
      }

      return res.status(200).json(`Usuário '${user.username}' foi deletado com sucesso`);
    } catch (err) {
      let removeContent = err.message.indexOf(':');

      if (removeContent !== -1) {
        removeContent = err.message.substring(removeContent + 1).trim().split(', ');
      }

      return res.status(400).json({
        errors: removeContent.map((e) => e),
      });
    }
  }

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

      return res.status(200).json(data.map((item) => ({
        mes: item._id, // Renomeia _id para mes
        total: item.total, // Mantém o campo total
      })));
    } catch (err) {
      return res.status(500).json({
        errors: ['Erro interno'],
      });
    }
  }
}

export default new UserController();
