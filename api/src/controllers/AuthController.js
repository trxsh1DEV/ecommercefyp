import bcryptjs from 'bcryptjs';
import UserModel from '../models/User';

class AuthController {
  // Register
  async register(req, res) {
    const newUser = new UserModel(req.body);

    try {
      const savedUser = await newUser.save();
      const { username, email, id } = savedUser;
      return res.status(201).json({ username, email, id });
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

  async login(req, res) {
    try {
      const queryUser = await UserModel.findOne({ email: req.body.email });

      if (!queryUser) {
        console.log(queryUser, req.body.email);
        return res.status(401).json({
          errors: 'Usuário não encontrado',
        });
      }

      const inputPassword = req.body.password;

      if (!bcryptjs.compareSync(inputPassword, queryUser.password)) {
        return res.status(401).json({
          errors: 'Credencias inválidas, verifique o login e/ou a senha',
        });
      }
      const { password, ...others } = queryUser._doc;
      return res.status(200).json(others);
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

export default new AuthController();
