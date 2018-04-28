'use strict';
module.exports = (sequelize, DataTypes) => {
  var lineItems = sequelize.define('line_items', {
    product_id: DataTypes.INTEGER,
    quantity: DataTypes.INTEGER,
    total_line: DataTypes.DOUBLE,
    price: DataTypes.DOUBLE,
    purchase_order: DataTypes.INTEGER
  }, {});
  lineItems.associate = function(models) {
    // associations can be defined here
  };
  return lineItems;
};
