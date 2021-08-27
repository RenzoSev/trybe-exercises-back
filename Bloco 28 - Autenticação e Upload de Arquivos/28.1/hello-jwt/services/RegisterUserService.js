const RegisterUserModel = require('../models/RegisterUserModel');

class RegisterUserService {
  async handle(user) {
    const registerUserModel = new RegisterUserModel();

    const registeredUser = await registerUserModel.handle(user);

    return registeredUser;
  }
}

module.exports = RegisterUserService;
