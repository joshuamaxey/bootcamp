'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */

    await queryInterface.addColumn("Musicians", "bandId", { // add 'bandId' column to 'Musicians' table
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
        model: "Bands", // references bands table...
        key: "id" // ...on the 'id' column
      },
      onDelete: "CASCADE"
    })
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */

    await queryInterface.removeColumn("Musicians", "bandId");
  }
};
