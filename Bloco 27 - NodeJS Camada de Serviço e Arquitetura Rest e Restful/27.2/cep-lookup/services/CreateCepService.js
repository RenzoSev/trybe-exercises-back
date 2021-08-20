import CepModel from '../models/CepModel.js';
import { cepFormat } from '../utils/format.js';

class CreateCepService {
  async handle(cepBody) {
    const cepModel = new CepModel();

    const alreadExistsCep = await cepModel.getByCep(cepBody.cep).length;

    if (alreadExistsCep) {
      const message = {
        error: { code: 'alreadyExists', message: 'CEP já existente' },
      };

      return message;
    }

    const formatedCep = cepFormat(cepBody.cep);

    const cep = await cepModel.create({ ...cepBody, cep: formatedCep });

    return cep;
  }
}

export default CreateCepService;
