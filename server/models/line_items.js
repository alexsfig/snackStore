'use strict';
module.exports = (sequelize, DataTypes) => {
  var LineItem = sequelize.define('LineItem', {
    product_id: DataTypes.INTEGER,
    quantity: DataTypes.INTEGER,
    total_line: DataTypes.DOUBLE,
    price: DataTypes.DOUBLE,
    purchase_order_id: DataTypes.INTEGER
  }, {
      freezeTableName: true,
      tableName: 'line_items'
  });
  LineItem.associate = function(models) {
    LineItem.belongsTo(models.PurchaseOrder,
    {
      foreignKey: 'purchase_order_id',
      as: 'purchase_order'
    });
    LineItem.belongsTo(models.Product,
    {
      foreignKey: 'product_id',
      as: 'product'
    });
  };
  return LineItem;
};
