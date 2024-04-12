'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class UmpireInfo extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      UmpireInfo.belongsTo(models.Participant, { as: 'umpireInfo' })

    }
  }
  UmpireInfo.init({
    isNewToUmpiring: DataTypes.BOOLEAN,
    participantId: DataTypes.NUMBER
  }, {
    sequelize,
    modelName: 'UmpireInfo',
  });
  return UmpireInfo;
};