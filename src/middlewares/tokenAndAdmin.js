import jwt from 'jsonwebtoken';

export default (req, res, next) => {
  const { authorization } = req.headers;

  if (!authorization) {
    return res.status(401).json({
      errors: ['Login é obrigatório'],
    });
  }

  const [, token] = authorization.split(' ');

  try {
    const data = jwt.verify(token, process.env.TOKEN_SECRET);
    const { id, mail: email, isAdmin } = data;

    req.userId = id;
    req.userEmail = email;
    req.userIsAdmin = isAdmin;
    return next();
  } catch (err) {
    return res.status(403).json({
      errors: ['Token expirado ou inválido'],
    });
  }
};
