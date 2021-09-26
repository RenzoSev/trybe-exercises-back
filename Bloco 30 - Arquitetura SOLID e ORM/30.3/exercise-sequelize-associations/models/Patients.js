const Patients = (sequelize, DataTypes) => {
  const Patients = sequelize.define('Patients', {
    patient_id: {
      type: DataTypes.STRING,
      primaryKey: true,
      autoIncrement: true,
    },
    fullname: DataTypes.STRING,
    plan_id: { type: DataTypes.INTEGER, foreignKey: true },
  });

  Patients.associate = (models) => {
    Patients.belongsTo(models.Plans, { as: 'plans', foreignKey: 'plan_id' });
  };

  return Patients;
};

module.exports = Patients;
