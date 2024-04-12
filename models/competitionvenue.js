'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class competitionVenue extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  competitionVenue.init({
    competitionId: DataTypes.INTEGER,
    venueId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'competitionVenue',
  });
  return competitionVenue;
};