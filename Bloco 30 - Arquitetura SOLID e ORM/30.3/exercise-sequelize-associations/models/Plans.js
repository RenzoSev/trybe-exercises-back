const Plans = (sequelize, DataTypes) => {
  const Plans = sequelize.define(
    'Plans',
    {
      plan_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      coverage: DataTypes.STRING,
      price: DataTypes.DOUBLE,
    },
    {
      timestamps: false,
    }
  );

  Plans.associate = (models) => {
    Plans.hasMany(models.Patients, { as: 'patients', foreignKey: 'plan_id' });
  };
};

module.exports = Plans;
