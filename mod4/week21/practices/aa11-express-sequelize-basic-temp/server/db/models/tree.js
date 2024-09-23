'use strict';
const {
  Model,
  FLOAT,
  Sequelize
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Tree extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Tree.init({
    tree: {
      type: Sequelize.STRING,
      allowNull: false,
      unique: true,
    },
    location: Sequelize.STRING,
    heightFt: {
      type: DataTypes.FLOAT,
      validate: {
        min: 0
      }
    },
    groundCirucmferenceFt: {
      type: Sequelize.FLOAT,
      validate: {
        min: 0
      }
    }
  }, {
    sequelize,
    modelName: 'Tree',
  });
  return Tree;
};
