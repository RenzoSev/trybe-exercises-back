const CreatePatientService = require('../../service/patients/CreatePatientService');

class CreatePatientController {
  async handle(req, res) {
    const { fullname, plan_id } = req.body;

    const createPatientService = new CreatePatientService();

    const newPatient = await createPatientService.handle({ fullname, plan_id });

    res.status(200).json(newPatient);
  }
}

module.exports = CreatePatientController;
