'use strict';
module.exports = (sequelize, DataTypes) => {
  var Roles = sequelize.define('Roles', {
    name: DataTypes.STRING,
    descrition: DataTypes.STRING
  }, {
    freezeTableName: true,
    tableName: 'roles'
  });
  Roles.associate = function(models) {
    // associations can be defined here
  };
  return Roles;
};
