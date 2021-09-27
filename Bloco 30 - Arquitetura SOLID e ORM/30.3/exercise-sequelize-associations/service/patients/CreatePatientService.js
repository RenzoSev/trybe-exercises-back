const { Patients } = require('../../models');

class CreatePatientService {
  async handle({ fullname, plan_id }) {
    try {
      const newPatient = await Patients.create({ fullname, plan_id });

      return newPatient;
    } catch (e) {
      const errorMessage = { isError: true, message: e };

      return errorMessage;
    }
  }
}

module.exports = CreatePatientService;
