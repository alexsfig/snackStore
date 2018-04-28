/***** User Controller *****/
const User = require('../../models').User;
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
        role_id: req.body.role_id,
        email: req.body.email,
        firstName: req.body.first_name,
        lastName: req.body.last_name,
        password: req.body.password || "welcome2017",
      })
      .then(user => res.status(201).send(user))
      .catch(error => res.status(400).send(error));
    }
  },
}
