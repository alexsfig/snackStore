'use strict';
module.exports = (sequelize, DataTypes) => {
  var purchaseOrder = sequelize.define('purchase_order', {
    user_id: DataTypes.INTEGER,
    total_amount: DataTypes.DOUBLE,
    status: DataTypes.BOOLEAN,
    order_id: DataTypes.STRING
  }, {});
  purchaseOrder.associate = function(models) {
    // associations can be defined here
  };
  return purchaseOrder;
};
