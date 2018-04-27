'use strict';
module.exports = (sequelize, DataTypes) => {
  var roles = sequelize.define('roles', {
    name: DataTypes.STRING,
    descrition: DataTypes.STRING
  }, {});
  roles.associate = function(models) {
    // associations can be defined here
  };
  return roles;
};