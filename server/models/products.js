module.exports = (sequelize, DataTypes) => {
  var Product = sequelize.define('Product', {
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false
    },
    stock: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    price: {
      type: DataTypes.DOUBLE,
      allowNull: false
    },
    likes: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    status: {
      type: DataTypes.BOOLEAN,
      default: true
    }
  },
  {
      freezeTableName: true,
      tableName: 'products'
  }
  );

  Product.associate = function(models) {
    Product.hasMany(models.LogProduct,
    {
      foreignKey: 'product_id',
      as: 'log_products',
    });
  };
  return Product;
};
