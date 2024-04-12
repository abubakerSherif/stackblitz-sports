'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class HealthIndicator extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      HealthIndicator.belongsTo(models.Participant)
    }
  }
  HealthIndicator.init({
    chestPain: DataTypes.BOOLEAN,
    heartTrouble: DataTypes.BOOLEAN,
    bloodPressure: DataTypes.BOOLEAN,
    faintOrSpells: DataTypes.BOOLEAN,
    lowerBackProblem: DataTypes.BOOLEAN,
    physicalActivity: DataTypes.BOOLEAN,
    jointOrBoneProblem: DataTypes.BOOLEAN,
    pregnant: DataTypes.BOOLEAN,
    participantId: DataTypes.NUMBER
  }, {
    sequelize,
    modelName: 'HealthIndicator',
  });
  return HealthIndicator;
};