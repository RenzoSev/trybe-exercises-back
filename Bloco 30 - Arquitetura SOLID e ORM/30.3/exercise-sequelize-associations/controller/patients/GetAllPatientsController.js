const GetAllPatientsService = require('../../service/GetAllPatientsService');

class GetAllPatientsController {
  async handle(_req, res) {
    const getAllPatientsService = new GetAllPatientsService();

    const patients = await getAllPatientsService.handle();

    res.status(200).json(patients);
  }
}

module.exports = GetAllPatientsController;
