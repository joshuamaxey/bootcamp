'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Instrument extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Instrument.belongsTo(models.Store)
    }
  }
  Instrument.init({
    name: DataTypes.STRING,
    type: DataTypes.STRING,
    storeId: DataTypes.INTEGER
  }, {
    defaultScope: {
      attributes: {
        include: ['id', 'name', 'type', 'storeId'],
        exclude: ['createdAt', 'updatedAt']
      }
    },
    scopes: {
      keyboard: {
        where: {
          type: 'keyboard'
        },
        attributes: {
          exclude: ['createdAt', 'updatedAt']
        }
      },
      string: {
        where: {
          type: 'string'
        },
        attributes: {
          exclude: ['createdAt', 'updatedAt']
        }
      },
      woodwind: {
        where: {
          type: 'woodwind'
        },
        attributes: {
          exclude: ['createdAt', 'updatedAt'],
        }
      },
      alphabetical: function (storeId) { // 'storeId' is a route parameter that specifies which store we want to return the instruments of.
        return {
          where: {
            storeId: storeId // Here we dynamically filter the instruments that match the 'storeId' provided in the route parameter.
          },
          order: [['name', 'ASC']], // Here we order the results (the instruments belonging to a certain store as specified by the storeId route parameter) by name in ASCENDING order, sorting them alphabetically by their names.
          include: {
            model: sequelize.models.Store, // Here, we tell sequelize to include the 'store' model in the results.
            attributes: ['id', 'name', 'location'] // Here we specify which attributes of the Store model should be included in the results.
          },
          attributes: {
            exclude: ['createdAt', 'updatedAt'] // Finally, we tell sequelize to exclude the Instruments' 'createdAt' and 'updatedAt' attributes
          }
        }
      }
    },
    sequelize,
    modelName: 'Instrument',
  });
  return Instrument;
};
