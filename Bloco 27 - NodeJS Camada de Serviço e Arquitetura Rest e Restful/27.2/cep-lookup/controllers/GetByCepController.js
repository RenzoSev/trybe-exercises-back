import GetByCepService from '../services/GetByCepService.js';

class GetByCepController {
  async handle(req, res) {
    const { cep } = req.params;

    const getByCepService = new GetByCepService();

    const cepById = await getByCepService.handle(cep);

    console.log(cepById.message);

    if (cepById.error) return res.status(cepById.status).json(cepById.message);

    return res.status(200).json(cepById.payload);
  }
}

export default GetByCepController;
