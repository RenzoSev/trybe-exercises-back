require('dotenv').config();

const jwt = require('jsonwebtoken');
const { SECRET } = process.env;

const authToken = (req, _res, next) => {
  const { authorization: token } = req.headers;

  if (!token) {
    const errorMessage = {
      err: { statusCode: 401, message: 'Token not found' },
    };

    next(errorMessage.err);
  }

  const decode = jwt.verify(token, SECRET);

  req.decode = decode;

  next();
};

module.exports = authToken;
