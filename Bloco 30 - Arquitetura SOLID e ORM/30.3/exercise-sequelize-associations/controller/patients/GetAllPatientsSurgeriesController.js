const GetAllPatientsSurgeriesService = require('../../service/GetAllPatientsSurgeriesService');

class GetAllPatientsSurgeriesController {
  async handle(_req, res) {
    const getAllPatientsSurgeriesService = new GetAllPatientsSurgeriesService();

    const patientsWithSurgeries = await getAllPatientsSurgeriesService.handle();

    res.status(200).json(patientsWithSurgeries);
  }
}

module.exports = GetAllPatientsSurgeriesController;
