'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Items', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nameAm: {
        type: Sequelize.STRING
      },
      nameRu: {
        type: Sequelize.STRING
      },
      price: {
        type: Sequelize.STRING
      },
      numberCode: {
        type: Sequelize.STRING
      },
      categorie: {
        type: Sequelize.STRING
      },
      descriptionAm: {
        type: Sequelize.STRING
      },
      descriptionRu: {
        type: Sequelize.STRING
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
    await queryInterface.dropTable('Items');
  }
};