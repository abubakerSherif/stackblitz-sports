'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('HealthIndicators', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      chestPain: {
        type: Sequelize.BOOLEAN
      },
      heartTrouble: {
        type: Sequelize.BOOLEAN
      },
      bloodPressure: {
        type: Sequelize.BOOLEAN
      },
      faintOrSpells: {
        type: Sequelize.BOOLEAN
      },
      lowerBackProblem: {
        type: Sequelize.BOOLEAN
      },
      physicalActivity: {
        type: Sequelize.BOOLEAN
      },
      jointOrBoneProblem: {
        type: Sequelize.BOOLEAN
      },
      pregnant: {
        type: Sequelize.BOOLEAN
      },
      participantId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: { model: "Participants", key: "id" },
        onUpdate: "cascade",
        onDelete: "cascade",
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('HealthIndicators');
  }
};