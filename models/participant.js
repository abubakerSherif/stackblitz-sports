'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Participant extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here

      Participant.belongsTo(models.Competition)

      Participant.belongsToMany(models.OtherSport, { through: 'participantOtherSport', as: 'otherSport' });
      Participant.belongsToMany(models.Language, { through: 'participantLanguage', as: 'languages' });


      Participant.hasMany(models.Volunteer, { as: 'volunteer', foreignKey: 'participantId' })
      Participant.hasOne(models.HealthIndicator, { as: 'healthIndicator', foreignKey: 'participantId' })
      Participant.hasOne(models.UmpireInfo, { as: 'umpireInfo', foreignKey: 'participantId' })

    }
  }
  Participant.init({
    preferredPlay: DataTypes.TEXT,
    firstName: DataTypes.STRING,
    middleName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    gender: DataTypes.STRING,
    role: DataTypes.STRING,
    email: DataTypes.STRING,
    mobileNumber: DataTypes.STRING,
    competitionId: DataTypes.NUMBER,
    marketingOptIn: DataTypes.INTEGER,
    isHIdden: DataTypes.INTEGER,
    photographyConsent: DataTypes.INTEGER,
    yearsPlayed: DataTypes.INTEGER,
    schoolGrade: DataTypes.INTEGER,
    SSP: DataTypes.INTEGER,
    hasDisability: DataTypes.INTEGER,
    ambulanceCover: DataTypes.INTEGER,
    doNotSendEmail: DataTypes.INTEGER,
    registeredParticipantId: DataTypes.INTEGER,
    userId: DataTypes.INTEGER,
    dateOfBirth: DataTypes.DATE,
    childrenCheckExpiryDate: DataTypes.DATE,
    isUmpirePrerequisiteTrainingComplete: DataTypes.BOOLEAN,
    accreditationUmpireLevel: DataTypes.STRING,
    accreditationUmpireExpiryDate: DataTypes.DATE,
    associationLevel: DataTypes.STRING,
    accreditationCoachLevel: DataTypes.STRING,
    accreditationCoachExpiryDate: DataTypes.DATE,
    mergedUserId: DataTypes.INTEGER,
    membershipProduct: DataTypes.STRING,
    nonRegisteredParticipantId: DataTypes.STRING,
    identifyAs: DataTypes.STRING,
    countryOfBirth: DataTypes.STRING,
    heardyAboutCompetition: DataTypes.STRING,
    heardByOther: DataTypes.STRING,
    favouriteTeam: DataTypes.STRING,
    school: DataTypes.STRING,
    culture: DataTypes.STRING,
    occupation: DataTypes.STRING,
    externalUserId: DataTypes.STRING,
    existingMedicalCondition: DataTypes.STRING,
    regularMedication: DataTypes.STRING,
    disabilityCareNumber: DataTypes.STRING,
    disabilityType: DataTypes.STRING,
    injury: DataTypes.STRING,
    walkingSportInfo: DataTypes.STRING,
    membershipDivision: DataTypes.STRING,
    preferredPosition1: DataTypes.STRING,
    preferredPosition2: DataTypes.STRING,
    organisation: DataTypes.STRING,
    team: DataTypes.STRING,
    emergencyFirstName: DataTypes.STRING,
    emergencyLastName: DataTypes.STRING,
    childrenCheckNumber: DataTypes.STRING,
    emergencyContactNumber: DataTypes.STRING,
    postalCode: DataTypes.STRING,
    street1: DataTypes.STRING,
    suburb: DataTypes.STRING,
    state: DataTypes.STRING,
    country: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'Participant',
  });
  return Participant;
};