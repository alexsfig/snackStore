const productsController = require('../controllers/admin').products;

module.exports = (app, jwt, express) =>
{
    const apiRoutes = express.Router();


    apiRoutes.post('/products', productsController.create)
    apiRoutes.get('/products', productsController.list)



    app.use('/api/v1', apiRoutes);
    app._router.stack.forEach(function(r){
      if (r.route && r.route.path){
        console.log(r.route.path)
      }
    })

};
