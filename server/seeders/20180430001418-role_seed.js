'use strict';
const Role = require('../models').Role;

module.exports = {
  up: (queryInterface, Sequelize) => {
    return Role.bulkCreate(
    [
      {
        name: 'admin',
        description: 'admin'
      },
      {
        name: 'user',
        description: 'user'
      },

    ])
    .then(() => { // Notice: There are no arguments here, as of right now you'll have to...
      return "All roles has been created";
    }).then(roles => {
      console.log(roles) // ... in order to get the array of user objects
    })
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
  }
};
