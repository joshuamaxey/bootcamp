'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Test extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Test.init({
    column1: DataTypes.STRING,
    column2: DataTypes.INTEGER,
    column3: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Test',
  });
  return Test;
};