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
  Color.init({
    name: {
      type: DataTypes.STRING, // specify data type of the 'name' attribute 
      allowNull: false, // ensure hte name attribute cannot be empty
      unique: true, // ensure hte name attribute is unique
      validate: {
        notEmpty: true // ensure the name attribute is not an empty string
      }
    }
  }, {
    sequelize,
    modelName: 'Color',
  });
  return Color;
};
