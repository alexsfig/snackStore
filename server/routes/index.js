const productsController = require('../controllers/admin').products;

module.exports = (app, jwt, express) =>
{
    const apiRoutes = express.Router();


    apiRoutes.post('/products', productsController.create)
    apiRoutes.get('/products', productsController.list)
    apiRoutes.get('/products/:order', productsController.list)
    apiRoutes.get('/products/:order/:orderColumn', productsController.list)
    apiRoutes.get('/product/:id', productsController.find)
    apiRoutes.get('/productByName/:name', productsController.findByName)
    apiRoutes.put('/products/:id', productsController.update)
    apiRoutes.delete('/products/:id', productsController.delete)
    apiRoutes.post('/products/:id/like', productsController.like)



    app.use('/api/v1', apiRoutes);

};
