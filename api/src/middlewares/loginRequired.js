import jwt from 'jsonwebtoken';
import User from '../models/User';

export default async (req, res, next) => {
  console.log(req.headers);
  const { authorization } = req.headers;

  if (!authorization) {
    return res.status(401).json({
      errors: ['Login é obrigatório'],
    });
  }

  const [, token] = authorization.split(' ');

  try {
    const data = jwt.verify(token, process.env.TOKEN_SECRET);
    const { id, email } = data;

    const user = await User.findOne({ _id: id, email });
    // console.log(user);

    if (!user) {
      return res.status(401).json({
        errors: ['Usuário inválido'],
      });
    }

    req.userId = id;
    req.userEmail = email;
    // req.userIsAdmin = isAdmin;
    return next();
  } catch (err) {
    return res.status(403).json({
      errors: ['Token expirado ou inválido'],
    });
  }
};
