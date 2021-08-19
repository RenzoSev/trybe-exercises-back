import CepModel from '../models/CepModel.js';

class GetByCepService {
  async handle(id) {
    const cepModel = new CepModel();

    const cep = await cepModel.getByCep(id);

    if (!cep) {
      const message = {
        error: { code: 'notFound', message: 'CEP não encontrado', status: 404 },
      };

      return message;
    }

    return { payload: cep };
  }
}

export default GetByCepService;
