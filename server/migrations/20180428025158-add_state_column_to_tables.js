'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

    queryInterface.addColumn('Products', 'status',
      {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: true
      }
    );
    queryInterface.addColumn('Users', 'status',
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
    queryInterface.removeColumn('Products', 'status');
    queryInterface.removeColumn('Users', 'status');
    queryInterface.removeColumn('roles', 'status');
  }
};
