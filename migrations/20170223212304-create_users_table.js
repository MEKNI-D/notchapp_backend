'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    queryInterface.createTable('users', {
      id: {
        type : Sequelize.STRING,
        primaryKey: true
      },
      firstName: Sequelize.STRING,
      lastName: Sequelize.STRING,
      email: Sequelize.STRING,
      phoneNumber: Sequelize.INTEGER,
      address: Sequelize.STRING,
      city: Sequelize.STRING,
      createdAt: {
        type: Sequelize.DATE
      },
      updatedAt: {
        type: Sequelize.DATE
      },
    });
  },

  down: function (queryInterface, Sequelize) {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.dropTable('users');
    */
  }
};
