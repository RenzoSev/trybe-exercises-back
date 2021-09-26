const Surgeries = (sequelize, DataTypes) => {
  const Surgeries = sequelize.define(
    'Surgeries',
    {
      surgery_id: {
        primaryKey: true,
        autoIncrement: true,
        type: DataTypes.INTEGER,
      },
      specialty: DataTypes.STRING,
      doctor: DataTypes.STRING,
    },
    { timestamps: false }
  );

  return Surgeries;
};
