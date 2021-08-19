import GetByCepService from '../services/GetByCepService.js';

class GetByCepController {
  async handle(req, res) {
    const { id } = req.body;

    const getByCepService = new GetByCepService();

    const cep = await getByCepService.handle(id);

    if (cep.error) return res.status(cep.status).json(cep.message);

    return res.status(200).json(cep.payload);
  }
}

export default GetByCepController;
