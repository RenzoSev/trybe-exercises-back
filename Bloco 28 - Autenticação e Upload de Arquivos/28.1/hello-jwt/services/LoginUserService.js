require('dotenv').config();

const LoginUserModel = require('../models/LoginUserModel');
const jwt = require('jsonwebtoken');
const { SECRET } = process.env;

class LoginUserService {
  getToken(payload) {
    const jwtConfig = {
      expiresIn: '1d',
      algorithm: 'HS256',
    };

    const token = jwt.sign(payload, SECRET, jwtConfig);

    return token;
  }

  getPayload(username, admin = false) {
    return { username, admin };
  }

  isAdmin(username, password) {
    return username === 'admin' && password === 's3nh4S3gur4';
  }

  async handle({ username, password }) {
    const loginUserModel = new LoginUserModel();

    if (this.isAdmin(username, password)) {
      const token = this.getToken(this.getPayload(username, true));

      return token;
    }

    const user = await loginUserModel.handle({ username, password });

    if (!user) {
      const errorMessage = {
        err: { statusCode: 404, message: 'User not found' },
      };

      return errorMessage;
    }

    const token = this.getToken(this.getPayload(username));

    return token;
  }
}

module.exports = LoginUserService;
