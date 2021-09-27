const { Patients, Surgeries } = require('../models');

class GetAllPatientsSurgeriesService {
  async handle() {
    const patientsWithSurgeries = await Patients.findAll({
      include: {
        model: Surgeries,
        as: 'surgeries',
        through: { attributes: [] },
      },
    });

    return patientsWithSurgeries;
  }
}

module.exports = GetAllPatientsSurgeriesService;
