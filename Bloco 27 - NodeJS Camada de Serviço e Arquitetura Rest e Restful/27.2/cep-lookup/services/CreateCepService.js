import CepModel from '../models/CepModel.js';

class CreateCepService {
  async handle(cepBody) {
    const cepModel = new CepModel();

    const alreadExistsCep = await cepModel.getByCep(cepBody.cep);

    if (alreadExistsCep) {
      const message = {
        error: { code: 'alreadyExists', message: 'CEP já existente' },
      };

      return message;
    }

    const cep = await cepModel.create(cepBody);

    return cep;
  }
}

export default CreateCepService;
