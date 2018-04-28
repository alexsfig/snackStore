'use strict';
module.exports = (sequelize, DataTypes) => {
  var PurchaseOrder = sequelize.define('PurchaseOrder', {
    user_id: DataTypes.INTEGER,
    total_amount: DataTypes.DOUBLE,
    status: DataTypes.BOOLEAN,
    order_id: DataTypes.STRING
  }, {
      freezeTableName: true,
      tableName: 'purchase_orders'
  });
  PurchaseOrder.associate = function(models) {
    PurchaseOrder.belongsTo(models.User,
    {
      foreignKey: 'user_id',
      as: 'user'
    });
    PurchaseOrder.hasMany(models.LineItem,
    {
      foreignKey: 'purchase_order_id',
      as: 'purchase_order',
    });
  };
  return PurchaseOrder;
};
