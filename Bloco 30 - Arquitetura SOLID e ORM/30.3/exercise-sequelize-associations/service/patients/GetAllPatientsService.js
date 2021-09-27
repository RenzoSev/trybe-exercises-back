const { Patients, Plans } = require('../../models');

class GetAllPatientsService {
  async handle() {
    try {
      const patients = await Patients.findAll({
        include: { model: Plans, as: 'plan' },
      });
      return patients;
    } catch (e) {
      const errorMessage = { error: true, message: e };
      return errorMessage;
    }
  }
}

module.exports = GetAllPatientsService;
