const LoginUserService = require('../services/LoginUserService');

class LoginUserController {
  async handle(req, res, next) {
    const { username, password } = req.body;

    const loginUserService = new LoginUserService();

    const token = await loginUserService.handle({ username, password });

    if (token.err) return next(token.err);

    return res.status(200).json({ token });
  }
}

module.exports = LoginUserController;
