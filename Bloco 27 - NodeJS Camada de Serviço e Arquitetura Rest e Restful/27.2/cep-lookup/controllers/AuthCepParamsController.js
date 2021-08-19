import { validCep } from '../utils/validaters.js';

class AuthCep {
  handle(req, res, next) {
    const { cep } = req.params;

    const isValidCep = validCep(cep);

    if (!isValidCep) {
      const message = {
        error: {
          code: 'invalidData',
          message: 'CEP inválido',
        },
      };

      return res.status(400).json(message);
    }

    next();
  }
}

export default AuthCep;
