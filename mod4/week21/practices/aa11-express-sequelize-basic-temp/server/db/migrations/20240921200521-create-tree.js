'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Trees', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      tree: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
      },
      location: Sequelize.STRING,
      heightFt: {
      type: Sequelize.FLOAT,
      // validate: {
      //   min: 0
      //   }
      },
      groundCirucmferenceFt: {
      type: Sequelize.FLOAT,
      // validate: {
      //   min: 0
      //   }
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.literal("CURRENT_TIMESTAMP")
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.literal("CURRENT_TIMESTAMP")
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Trees');
  }
};
