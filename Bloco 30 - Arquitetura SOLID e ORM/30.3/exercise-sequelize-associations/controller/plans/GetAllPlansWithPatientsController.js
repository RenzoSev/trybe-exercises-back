const { GetAllPlansWithPatientsService } = require('../../service/plans');

class GetAllPlansWithPatientsController {
  async handle(req, res) {
    const { id } = req.params;

    const getAllPlansWithPatientsService = new GetAllPlansWithPatientsService();

    const plansWithPatients = await getAllPlansWithPatientsService.handle(id);

    res.status(200).json(plansWithPatients);
  }
}

module.exports = GetAllPlansWithPatientsController;
