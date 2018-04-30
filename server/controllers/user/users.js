/***** User Controller *****/
const User = require('../../models').User;

const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const conf_var = require('../../config/config_var.js');

module.exports = {
  create(req, res) {
    if(!req.is('application/json')){
      return res.status(403).send({
        success: false,
        message: 'Expected application/json'
      });
    }
    else{
      return User.create({
        role_id: 2,
        email: req.body.email,
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        password: req.body.password || "welcome2017",
      })
      .then(user => res.status(201).send("User has been created"))
      .catch(error => res.status(400).send(error));
    }
  },
  login(req, res){
    if(!req.is('application/json')){
      return res.status(403).send({
        success: false,
        message: 'Expected application/json'
      });
    }
    else{
      data = req.body || {};
      return User.findOne({
        where: {
          email: data.email
        },
      })
      .then(user =>{
        if(!user) {
          return res.status(404).send({
            message: 'User email not found',
          });
        }
        else{
          if(!user.comparePassword(data.password)){
            return res.status(404).send({
              success: false,
              message: "Password did not match"
            });
          }
          else
          {
            if(user.role_id == 1 || user.role_id == 2){
              res.status(200);
              res.json({
                token: jwt.sign(
                  {
                    user_id: user.id,
                    role_id: user.role_id
                  },
                  conf_var.jwt_secret, { expiresIn: '4h'}
                )
              });
            }
            else{
              return res.status(404).send({
                success: false,
                user: user,
                message: "User does not have permission to login"
              });
            }
          }


        }
      }).catch((error) => res.status(400).send(error));
    }
  },
}
