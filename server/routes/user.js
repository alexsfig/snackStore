const productsController = require('../controllers/admin').products;
const purchaseOrderController = require('../controllers/user').purchaseOrder;
const lineItemsController = require('../controllers/user').lineItems;

module.exports = (app, jwt, express) =>
{
    const apiRoutes = express.Router();
    ////////////

    app.all('*', function(req, res, next)
    {
      console.error(req.url);
      if (!req.url.includes("/api/v1/users"))
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
              if (decoded.role_id !== 1 ) {
                req.decoded = decoded;
                next();
              }
              else {
                return res.status(403).send(
                {
                  success: false,
                  message: 'Authentication failed, non user.'
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
    apiRoutes.post('/products/:id/like', productsController.like)

    apiRoutes.post('/purchase_orders', purchaseOrderController.create)
    apiRoutes.get('/purchase_order/:id', purchaseOrderController.find)
    apiRoutes.post('/purchase_order/:id/completed', purchaseOrderController.completed)
    apiRoutes.post('/purchase_order/:id/canceled', purchaseOrderController.canceled)
    apiRoutes.get('/purchase_orders', purchaseOrderController.list)
    apiRoutes.get('/purchase_orders/:page', purchaseOrderController.list)
    apiRoutes.get('/purchase_orders/:page/:order', purchaseOrderController.list)
    apiRoutes.post('/line_items', lineItemsController.create)
    apiRoutes.delete('/line_items/:id', lineItemsController.delete)





    app.use('/api/v1/users', apiRoutes);

};
