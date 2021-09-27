const { Plans, Patients } = require('../../models');

class GetAllPlansWithPatientsService {
  async handle(id) {
    try {
      const plansWithPatients = await Plans.findAll({
        where: { plan_id: id },
        include: [{ model: Patients, as: 'patients' }],
      });

      return plansWithPatients;
    } catch (e) {
      const errorMessage = { isError: true, message: e };

      return errorMessage;
    }
  }
}

module.exports = GetAllPlansWithPatientsService;
