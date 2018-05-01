'use strict';
module.exports = (sequelize, DataTypes) => {
  var LogProduct = sequelize.define('LogProduct', {
    product_id: DataTypes.INTEGER,
    new_price: DataTypes.DOUBLE,
    previous_price: DataTypes.DOUBLE
  }, {
    freezeTableName: true,
    tableName: 'log_products'
  });
  LogProduct.associate = function(models) {
    
  }
  return LogProduct;
};
