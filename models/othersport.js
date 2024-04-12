'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class OtherSport extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      OtherSport.belongsToMany(models.Participant, { through: 'participantOtherSport' });
    }
  }
  OtherSport.init({
    name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'OtherSport',
  });
  return OtherSport;
};