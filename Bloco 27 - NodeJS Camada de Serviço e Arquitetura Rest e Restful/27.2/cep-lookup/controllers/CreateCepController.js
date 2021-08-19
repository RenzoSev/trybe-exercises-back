import rescue from 'express-rescue';
import CreateCepService from '../services/CreateCepService.js';

class CreateCepController {
  handle = rescue(async (req, res, next) => {
    const cepBody = req.body;

    const createCepService = new CreateCepService();

    const newCep = await createCepService.handle(cepBody);

    if (newCep.error) return next(error);

    return res.status(201).json(newCep);
  });
}

export default CreateCepController;
