module.exports = (sequelize, DataTypes) => {
  var Product = sequelize.define('Product', {
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    stock: DataTypes.INTEGER,
    price: DataTypes.DOUBLE,
    likes: DataTypes.INTEGER,
    status: DataTypes.BOOLEAN
  },
  {
      freezeTableName: true,
      tableName: 'Products'
  }
  );

  Product.associate = function(models) {
    // associations can be defined here
  };
  return Product;
};
