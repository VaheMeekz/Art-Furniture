'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Basket extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Basket.init({
    itemId: DataTypes.INTEGER,
    userId: DataTypes.INTEGER,
    nameAm: DataTypes.STRING,
    nameRu: DataTypes.STRING,
    price: DataTypes.STRING,
    numberCode: DataTypes.STRING,
    categorie: DataTypes.STRING,
    imgOne:DataTypes.STRING,
    imgTwo:DataTypes.STRING,
    imgThre:DataTypes.STRING,
    imgFore:DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'Basket',
  });
  return Basket;
};