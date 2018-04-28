'use strict';
const bcrypt = require('bcrypt');
module.exports = (sequelize, DataTypes) => {
  var User = sequelize.define('User', {
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    email: {
        type: DataTypes.STRING,
        allowNull: true,
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
    role_id: DataTypes.INTEGER
  }, {});
  User.hook('beforeCreate', (User, options) =>
  {
    User.password = bcrypt.hashSync(User.password, 10);
  });
  User.associate = function(models) {
    User.hasMany(models.purchaseOrder,
    {
      foreignKey: 'user_id',
      as: 'purchase_order',
    });
  };
  return User;
};
