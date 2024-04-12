'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    await queryInterface.addColumn('Participants', 'marketingOptIn', { type: Sequelize.INTEGER, allowNull: true });
    await queryInterface.addColumn('Participants', 'isHIdden', { type: Sequelize.INTEGER, allowNull: true });
    await queryInterface.addColumn('Participants', 'photographyConsent', { type: Sequelize.INTEGER, allowNull: true });
    await queryInterface.addColumn('Participants', 'yearsPlayed', { type: Sequelize.INTEGER, allowNull: true });
    await queryInterface.addColumn('Participants', 'schoolGrade', { type: Sequelize.INTEGER, allowNull: true });
    await queryInterface.addColumn('Participants', 'SSP', { type: Sequelize.INTEGER, allowNull: true });
    await queryInterface.addColumn('Participants', 'hasDisability', { type: Sequelize.INTEGER, allowNull: true });
    await queryInterface.addColumn('Participants', 'ambulanceCover', { type: Sequelize.INTEGER, allowNull: true });
    await queryInterface.addColumn('Participants', 'doNotSendEmail', { type: Sequelize.INTEGER, allowNull: true });
    await queryInterface.addColumn('Participants', 'registeredParticipantId', { type: Sequelize.INTEGER, allowNull: true });
    await queryInterface.addColumn('Participants', 'userId', { type: Sequelize.INTEGER, allowNull: true });
    await queryInterface.addColumn('Participants', 'dateOfBirth', { type: Sequelize.DATE, allowNull: true });
    await queryInterface.addColumn('Participants', 'childrenCheckExpiryDate', { type: Sequelize.DATE, allowNull: true });
    await queryInterface.addColumn('Participants', 'isUmpirePrerequisiteTrainingComplete', { type: Sequelize.BOOLEAN, allowNull: true });
    await queryInterface.addColumn('Participants', 'accreditationUmpireLevel', { type: Sequelize.STRING, allowNull: true });
    await queryInterface.addColumn('Participants', 'accreditationUmpireExpiryDate', { type: Sequelize.DATE, allowNull: true });
    await queryInterface.addColumn('Participants', 'associationLevel', { type: Sequelize.STRING, allowNull: true });
    await queryInterface.addColumn('Participants', 'accreditationCoachLevel', { type: Sequelize.STRING, allowNull: true });
    await queryInterface.addColumn('Participants', 'accreditationCoachExpiryDate', { type: Sequelize.DATE, allowNull: true });
    await queryInterface.addColumn('Participants', 'mergedUserId', { type: Sequelize.INTEGER, allowNull: true });
    await queryInterface.addColumn('Participants', 'membershipProduct', { type: Sequelize.STRING, allowNull: true });
    await queryInterface.addColumn('Participants', 'nonRegisteredParticipantId', { type: Sequelize.STRING, allowNull: true });
    await queryInterface.addColumn('Participants', 'identifyAs', { type: Sequelize.STRING, allowNull: true });
    await queryInterface.addColumn('Participants', 'countryOfBirth', { type: Sequelize.STRING, allowNull: true });
    await queryInterface.addColumn('Participants', 'heardyAboutCompetition', { type: Sequelize.STRING, allowNull: true });
    await queryInterface.addColumn('Participants', 'heardByOther', { type: Sequelize.STRING, allowNull: true });
    await queryInterface.addColumn('Participants', 'favouriteTeam', { type: Sequelize.STRING, allowNull: true });
    await queryInterface.addColumn('Participants', 'school', { type: Sequelize.STRING, allowNull: true });
    await queryInterface.addColumn('Participants', 'culture', { type: Sequelize.STRING, allowNull: true });
    await queryInterface.addColumn('Participants', 'occupation', { type: Sequelize.STRING, allowNull: true });
    await queryInterface.addColumn('Participants', 'externalUserId', { type: Sequelize.STRING, allowNull: true });
    await queryInterface.addColumn('Participants', 'existingMedicalCondition', { type: Sequelize.STRING, allowNull: true });
    await queryInterface.addColumn('Participants', 'regularMedication', { type: Sequelize.STRING, allowNull: true });
    await queryInterface.addColumn('Participants', 'disabilityCareNumber', { type: Sequelize.STRING, allowNull: true });
    await queryInterface.addColumn('Participants', 'disabilityType', { type: Sequelize.STRING, allowNull: true });
    await queryInterface.addColumn('Participants', 'injury', { type: Sequelize.STRING, allowNull: true });
    await queryInterface.addColumn('Participants', 'walkingSportInfo', { type: Sequelize.STRING, allowNull: true });
    await queryInterface.addColumn('Participants', 'membershipDivision', { type: Sequelize.STRING, allowNull: true });
    await queryInterface.addColumn('Participants', 'preferredPosition1', { type: Sequelize.STRING, allowNull: true });
    await queryInterface.addColumn('Participants', 'preferredPosition2', { type: Sequelize.STRING, allowNull: true });
    await queryInterface.addColumn('Participants', 'organisation', { type: Sequelize.STRING, allowNull: true });
    await queryInterface.addColumn('Participants', 'team', { type: Sequelize.STRING, allowNull: true });
    await queryInterface.addColumn('Participants', 'emergencyFirstName', { type: Sequelize.STRING, allowNull: true });
    await queryInterface.addColumn('Participants', 'emergencyLastName', { type: Sequelize.STRING, allowNull: true });
    await queryInterface.addColumn('Participants', 'childrenCheckNumber', { type: Sequelize.STRING, allowNull: true });
    await queryInterface.addColumn('Participants', 'emergencyContactNumber', { type: Sequelize.STRING, allowNull: true });
    await queryInterface.addColumn('Participants', 'postalCode', { type: Sequelize.STRING, allowNull: true });
    await queryInterface.addColumn('Participants', 'street1', { type: Sequelize.STRING, allowNull: true });
    await queryInterface.addColumn('Participants', 'suburb', { type: Sequelize.STRING, allowNull: true });
    await queryInterface.addColumn('Participants', 'state', { type: Sequelize.STRING, allowNull: true });
    await queryInterface.addColumn('Participants', 'country', { type: Sequelize.STRING, allowNull: true });


  },

  async down(queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */

    await queryInterface.removeColumn('Participants', 'marketingOptIn');
    await queryInterface.removeColumn('Participants', 'isHIdden');
    await queryInterface.removeColumn('Participants', 'photographyConsent');
    await queryInterface.removeColumn('Participants', 'yearsPlayed');
    await queryInterface.removeColumn('Participants', 'schoolGrade');
    await queryInterface.removeColumn('Participants', 'SSP');
    await queryInterface.removeColumn('Participants', 'hasDisability');
    await queryInterface.removeColumn('Participants', 'ambulanceCover');
    await queryInterface.removeColumn('Participants', 'doNotSendEmail');
    await queryInterface.removeColumn('Participants', 'registeredParticipantId');
    await queryInterface.removeColumn('Participants', 'userId');
    await queryInterface.removeColumn('Participants', 'dateOfBirth');
    await queryInterface.removeColumn('Participants', 'childrenCheckExpiryDate');
    await queryInterface.removeColumn('Participants', 'isUmpirePrerequisiteTrainingComplete');
    await queryInterface.removeColumn('Participants', 'accreditationUmpireLevel');
    await queryInterface.removeColumn('Participants', 'accreditationUmpireExpiryDate');
    await queryInterface.removeColumn('Participants', 'associationLevel');
    await queryInterface.removeColumn('Participants', 'accreditationCoachLevel');
    await queryInterface.removeColumn('Participants', 'accreditationCoachExpiryDate');
    await queryInterface.removeColumn('Participants', 'mergedUserId');
    await queryInterface.removeColumn('Participants', 'membershipProduct');
    await queryInterface.removeColumn('Participants', 'nonRegisteredParticipantId');
    await queryInterface.removeColumn('Participants', 'identifyAs');
    await queryInterface.removeColumn('Participants', 'countryOfBirth');
    await queryInterface.removeColumn('Participants', 'heardyAboutCompetition');
    await queryInterface.removeColumn('Participants', 'heardByOther');
    await queryInterface.removeColumn('Participants', 'favouriteTeam');
    await queryInterface.removeColumn('Participants', 'school');
    await queryInterface.removeColumn('Participants', 'culture');
    await queryInterface.removeColumn('Participants', 'occupation');
    await queryInterface.removeColumn('Participants', 'externalUserId');
    await queryInterface.removeColumn('Participants', 'existingMedicalCondition');
    await queryInterface.removeColumn('Participants', 'regularMedication');
    await queryInterface.removeColumn('Participants', 'disabilityCareNumber');
    await queryInterface.removeColumn('Participants', 'disabilityType');
    await queryInterface.removeColumn('Participants', 'injury');
    await queryInterface.removeColumn('Participants', 'walkingSportInfo');
    await queryInterface.removeColumn('Participants', 'membershipDivision');
    await queryInterface.removeColumn('Participants', 'preferredPosition1');
    await queryInterface.removeColumn('Participants', 'preferredPosition2');
    await queryInterface.removeColumn('Participants', 'organisation');
    await queryInterface.removeColumn('Participants', 'team');
    await queryInterface.removeColumn('Participants', 'emergencyFirstName');
    await queryInterface.removeColumn('Participants', 'emergencyLastName');
    await queryInterface.removeColumn('Participants', 'childrenCheckNumber');
    await queryInterface.removeColumn('Participants', 'emergencyContactNumber');
    await queryInterface.removeColumn('Participants', 'postalCode');
    await queryInterface.removeColumn('Participants', 'street1');
    await queryInterface.removeColumn('Participants', 'suburb');
    await queryInterface.removeColumn('Participants', 'state');
    await queryInterface.removeColumn('Participants', 'country');
  }
};
