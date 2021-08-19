import CepModel from '../models/CepModel.js';

class GetByCepController {
  async handle(req, res) {
    const { id } = req.body;

    const cepModel = new CepModel();

    const cep = await cepModel.getByCep(id);

    if (!cep) {
      const message = {
        error: { code: 'notFound', message: 'CEP não encontrado' },
      };

      return res.status(400).json(message);
    }

    return res.status(200).json(cep);
  }
}

export default GetByCepController;
