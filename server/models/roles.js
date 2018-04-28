'use strict';
module.exports = (sequelize, DataTypes) => {
  var Roles = sequelize.define('roles', {
    name: DataTypes.STRING,
    descrition: DataTypes.STRING
  }, {});
  Roles.associate = function(models) {
    // associations can be defined here
  };
  return Roles;
};
