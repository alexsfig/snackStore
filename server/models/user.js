'use strict';
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
  User.associate = function(models) {

  };
  return User;
};
