import bcryptjs from 'bcryptjs';
import jwt from 'jsonwebtoken';
import User from '../models/User';

class TokenController {
  async store(req, res) {
    const { email = '', password = '' } = req.body;

    if (!email || password.length < 8) {
      return res.status(401).json({
        errors: ['Credenciais inválidas'],
      });
    }

    try {
      const user = await User.findOne({ email });

      if (!user) {
        return res.status(401).json({
          errors: ['Usuário não encontrado'],
        });
      }

      if (!bcryptjs.compareSync(password, user.password)) {
        return res.status(401).json({
          errors: ['Credenciais inválidas'],
        });
      }
      const { id, email: mail, isAdmin } = user;
      const token = jwt.sign({ id, mail, isAdmin }, process.env.TOKEN_SECRET, {
        expiresIn: process.env.TOKEN_EXPIRATION,
      });

      return res.status(201).json({ token, isAdmin, mail });
    } catch (err) {
      return res.status(400).json({
        errors: ['Não foi possível gerar token'],
      });
    }
  }
}

export default new TokenController();
