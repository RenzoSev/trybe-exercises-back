require('dotenv').config();

const LoginUserModel = require('../models/LoginUserModel');
const jwt = require('jsonwebtoken');
const { SECRET } = process.env;

class LoginUserService {
  getToken({ username, password }) {
    const jwtConfig = {
      expiresIn: '1d',
      algorithm: 'HS256',
    };

    const token = jwt.sign({ data: { username, password } }, SECRET, jwtConfig);

    return token;
  }

  async handle({ username, password }) {
    const loginUserModel = new LoginUserModel();

    const user = await loginUserModel.handle({ username, password });

    if (!user) {
      const errorMessage = {
        err: { statusCode: 404, message: 'User not found' },
      };

      return errorMessage;
    }

    const token = this.getToken(user);

    return token;
  }
}

module.exports = LoginUserService;
