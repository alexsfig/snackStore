'use strict';
module.exports = (sequelize, DataTypes) => {
  var PurchaseOrder = sequelize.define('PurchaseOrder', {
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    total_amount: {
      type: DataTypes.DOUBLE,
      allowNull: false
    },
    status: {
      type: DataTypes.ENUM('pending', 'canceled', 'completed'),
      allowNull: false
    },
    order_id: {
      type: DataTypes.STRING,
      allowNull: false
    }
  },
  {
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
      as: 'line_items',
    });
  };
  return PurchaseOrder;
};
