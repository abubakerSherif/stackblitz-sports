'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Competition extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Competition.belongsToMany(models.Venue, { through: 'competitionVenue' });


      // define association here
    }
  }
  Competition.init({
    competitionName: DataTypes.STRING,
    competitionDivision: DataTypes.STRING,
    competitionStartDate: DataTypes.DATE,
    competitionEndDate: DataTypes.DATE,
  }, {
    sequelize,
    modelName: 'Competition',
  });
  return Competition;
};