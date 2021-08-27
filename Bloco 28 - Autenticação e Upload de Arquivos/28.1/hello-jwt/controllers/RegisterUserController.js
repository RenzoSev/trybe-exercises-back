const RegisterUserService = require('../services/RegisterUserService');

class RegisterUserController {
  async handle(req, res) {
    const user = req.body;

    const registerUserService = new RegisterUserService();

    const registeredUser = await registerUserService.handle(user);

    res.status(201).json(registeredUser);
  }
}

module.exports = RegisterUserController;
