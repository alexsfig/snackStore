'use strict';
module.exports = (sequelize, DataTypes) => {
  var Products = sequelize.define('Products', {
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    stock: DataTypes.INTEGER,
    price: DataTypes.DOUBLE,
    likes: DataTypes.INTEGER
  }, {});
  Products.associate = function(models) {
    // associations can be defined here
  };
  return Products;
};