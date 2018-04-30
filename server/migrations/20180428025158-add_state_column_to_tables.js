'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

    queryInterface.addColumn('products', 'status',
      {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: true
      }
    );
    queryInterface.addColumn('users', 'status',
      {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: true
      }
    );
    queryInterface.addColumn('roles', 'status',
      {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: true
      }
    );
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.dropTable('users');
    */
    queryInterface.removeColumn('products', 'status');
    queryInterface.removeColumn('users', 'status');
    queryInterface.removeColumn('roles', 'status');
  }
};
