'use strict';
const bcrypt = require('bcrypt');
module.exports = (sequelize, DataTypes) => {
  var User = sequelize.define('User', {
    firstName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    lastName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        validate:
        {
            isEmail: true,
            isUnique: (value, next) =>
            {
                var self = this;
                User.find(
                    {
                        where:
                        {
                            email: value,
                            status: true
                        }
                    })
                    .then((result) =>
                    {
                        if (result === null)
                        {
                            return next()
                        }
                        else
                        {
                            return next('Email is already in use')
                        }
                    })
                    .catch((err) =>
                    {
                        return next(err);
                    })
            }
        }
    },
    role_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    },

  }, {});
  User.hook('beforeCreate', (User, options) =>
  {
    User.password = bcrypt.hashSync(User.password, 10);
  });
  User.associate = function(models) {
    User.hasMany(models.PurchaseOrder,
    {
      foreignKey: 'user_id',
      as: 'purchase_order',
    });
  };
  return User;
};
