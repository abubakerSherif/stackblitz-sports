'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class participantLanguage extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  participantLanguage.init({
    participantId: DataTypes.INTEGER,
    languageId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'participantLanguage',
  });
  return participantLanguage;
};