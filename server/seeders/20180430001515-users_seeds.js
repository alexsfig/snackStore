'use strict';

const User = require('../models').User;
const bcrypt = require('bcrypt');

module.exports = {
  up: (queryInterface, Sequelize) => {
    return User.bulkCreate(
    [
      {
        role_id: 1,
        email: "admin@foo.com",
        firstName: "Foo",
        lastName: "Bar",
        password: bcrypt.hashSync("bar2018", 10),
      },
      {
        role_id: 2,
        email: "user@bar.com",
        firstName: "Bar",
        lastName: "Foo",
        password: bcrypt.hashSync("foo2018", 10),
      }

    ])
    .then(() => { // Notice: There are no arguments here, as of right now you'll have to...
      return "All Users has been created";
    }).then(users => {
      console.log(users) // ... in order to get the array of user objects
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
