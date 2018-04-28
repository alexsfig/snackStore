'use strict';
module.exports = (sequelize, DataTypes) => {
  var line_items = sequelize.define('line_items', {
    product_id: DataTypes.INTEGER,
    quantity: DataTypes.INTEGER,
    total_line: DataTypes.DOUBLE,
    price: DataTypes.DOUBLE,
    purchase_order: DataTypes.INTEGER
  }, {});
  line_items.associate = function(models) {
    // associations can be defined here
  };
  return line_items;
};
