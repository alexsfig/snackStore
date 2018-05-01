const productsController = require('../controllers/admin').products;
const usersController = require('../controllers/user').users;

module.exports = (app, jwt, express) =>
{
    const apiRoutes = express.Router();
    ////////////

    app.all('*', function(req, res, next)
    {
      console.error(req.url);
      if (!req.url.includes("/api/v1/admin"))
      {
        return next();
      }
      else
      {
        const token = req.body.token || req.query.token || req.headers['x-access-token'];
        if (token)
        {
          jwt.verify(token, app.get('jwt_secret'), (err, decoded) =>
          {
            if (err)
            {
              return res.status(403).send(
              {
                err,
              });
            }
            else
            {
              if (decoded.role_id !== 2 ) {
                req.decoded = decoded;
                next();
              }
              else {
                return res.status(403).send(
                {
                  success: false,
                  message: 'Authentication failed, non admin user.'
                });
              }
            }
          });
        }
        else
        {
          return res.status(403).send(
          {
            success: false,
            message: 'Authentication failed, no token provided.'
          });
        }
      }
    });
    apiRoutes.post('/products', productsController.create)
    apiRoutes.delete('/products/:id', productsController.delete)
    apiRoutes.put('/products/:id', productsController.update)
    apiRoutes.get('/products/:id', productsController.findWithLog)
    app.use('/api/v1/admin', apiRoutes);
};
