'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Color extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };

  function noEndingInY(value) {
    if(value.slice(-1) === 'y') {
      throw new Error('name must not end in \'y\'');
    }
  }

  function lengthBetween2And20(value) {
    if (value.length < 2 || value.length > 20) {
      throw new Error('Name must be between 2 and 20 characters')
    }
  }

  Color.init({
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        noEndingInY,
        lengthBetween2And20
      }
    }
  }, {
    sequelize,
    modelName: 'Color',
  });
  return Color;
};
