const productsController = require('../controllers/admin').products;
const usersController = require('../controllers/user').users;

module.exports = (app, jwt, express) =>
{
    const apiRoutes = express.Router();


    apiRoutes.get('/products', productsController.list)
    apiRoutes.get('/products/:order', productsController.list)
    apiRoutes.get('/products/:order/:orderColumn', productsController.list)
    apiRoutes.get('/product/:id', productsController.find)
    apiRoutes.get('/productByName/:name', productsController.findByName)
    apiRoutes.put('/products/:id', productsController.update)
    apiRoutes.post('/users/sign_in', usersController.login)
    apiRoutes.post('/users/sign_up', usersController.create)

    app.use('/api/v1', apiRoutes);

};
