import rescue from 'express-rescue';
import CepSchema from '../schemas/CepSchema.js';
import { validCep } from '../utils/validaters.js';

class AuthCepBodyController {
  // async handle() {
  //   const middleware = (req, res, next) => {
  //     const cep = req.body;

  //     const { error } = CepSchema.validate(cep);

  //     if (error) next(error);

  //     next();
  //   };

  //   rescue(middleware);
  // }

  handle = rescue(async (req, _res, next) => {
    const cep = req.body;

    const isValidCep = validCep(cep);

    if (!isValidCep) {
      if (!isValidCep) {
        const message = {
          error: {
            code: 'invalidData',
            message: 'CEP inválido',
          },
        };

        next(message);
      }
    }

    const { error } = CepSchema.validate(cep);

    if (error) next(error);

    next();
  });
}

export default AuthCepBodyController;
