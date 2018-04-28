'use strict';
module.exports = (sequelize, DataTypes) => {
  var purchaseOrders = sequelize.define('purchase_order', {
    user_id: DataTypes.INTEGER,
    total_amount: DataTypes.DOUBLE,
    status: DataTypes.BOOLEAN,
    order_id: DataTypes.STRING
  }, {});
  purchaseOrders.associate = function(models) {
    purchaseOrders.belongsTo(models.User,
    {
      foreignKey: 'user_id',
      as: 'user'
    });
    purchaseOrders.hasMany(models.lineItems,
    {
      foreignKey: 'purchase_order_id',
      as: 'purchase_order',
    });
  };
  return purchaseOrders;
};
