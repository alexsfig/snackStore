'use strict';
module.exports = (sequelize, DataTypes) => {
  var lineItems = sequelize.define('line_items', {
    product_id: DataTypes.INTEGER,
    quantity: DataTypes.INTEGER,
    total_line: DataTypes.DOUBLE,
    price: DataTypes.DOUBLE,
    purchase_order_id: DataTypes.INTEGER
  }, {});
  lineItems.associate = function(models) {
    lineItems.belongsTo(models.purchaseOrder,
    {
      foreignKey: 'purchase_order_id',
      as: 'purchase_order'
    });
  };
  return lineItems;
};
