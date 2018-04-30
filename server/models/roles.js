'use strict';
module.exports = (sequelize, DataTypes) => {
  var Role = sequelize.define('Role', {
    name: DataTypes.STRING,
    descrition: DataTypes.STRING
  }, {
    freezeTableName: true,
    tableName: 'roles'
  });
  Role.associate = function(models) {
    // associations can be defined here
  };
  return Role;
};
