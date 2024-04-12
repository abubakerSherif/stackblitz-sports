'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Volunteer extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Volunteer.belongsTo(models.Participant)
    }
  }
  Volunteer.init({
    description: DataTypes.STRING,
    isActive: DataTypes.BOOLEAN,
    participantId: DataTypes.NUMBER
  }, {
    sequelize,
    modelName: 'Volunteer',
  });
  return Volunteer;
};