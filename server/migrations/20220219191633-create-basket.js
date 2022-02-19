'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Baskets', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      itemId: {
        type: Sequelize.INTEGER
      },
      userId: Sequelize.INTEGER,
      nameAm: Sequelize.STRING,
      nameRu: Sequelize.STRING,
      price: Sequelize.STRING,
      numberCode: Sequelize.STRING,
      categorie: Sequelize.STRING,
      imgOne:Sequelize.STRING,
      imgTwo:Sequelize.STRING,
      imgThre:Sequelize.STRING,
      imgFore:Sequelize.STRING,
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
    await queryInterface.dropTable('Baskets');
  }
};