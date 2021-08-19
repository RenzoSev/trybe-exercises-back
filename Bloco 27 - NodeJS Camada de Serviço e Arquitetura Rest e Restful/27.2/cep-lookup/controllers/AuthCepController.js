class AuthCep {
  handle(req, res, next) {
    const { cep } = req.params;

    const regex = /\d{5}-?\d{3/;

    if (regex.test(cep)) {
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
