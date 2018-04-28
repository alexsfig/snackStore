const PurchaseOrder = require('../../models').PurchaseOrder;
const LineItem = require('../../models').LineItem;
const purOrder = LineItem.belongsTo(PurchaseOrder, {as: 'purchase_orders', foreignKey: 'purchase_order_id'});
const jwt = require('jsonwebtoken');
const uuid = require("uuid");

module.exports = {

	create(req, res){
    const token = req.body.token || req.query.token || req.headers['x-access-token'];
		var decoded = jwt.decode(token, {complete: true});

		if(!req.is('application/json')){
			res.status(403).send({
				success: false,
				message: 'Expected application/json'
			});
		}else{
			data = req.body || {};
			if(!data || Object.keys(data).length === 0){
				res.status(403).send({
					success: false,
					message: 'Expected application/json data'
				});
			}
			else{
        return PurchaseOrder.findOne({
          attributes: ['order_id', 'id'],
          where: {
            user_id:  decoded.payload.user_id,
            status:   "pending"
          },
        })
        .then(purchaseOrder =>{
          if(!purchaseOrder) {
            return LineItem.create(
              {
                product_id: data.product_id,
                price:      data.price,
                total_line: data.quantity * data.price,
                quantity:   data.quantity,
                purchase_orders: {
                  user_id:       decoded.payload.user_id,
        					status:        'pending',
                  order_id:      uuid.v4(),
                }
              },
              {
                include: [  purOrder  ]
              }
            )
            .then(lineItems => res.status(201).send(lineItems))
            .catch(error => res.status(400).send(error));
          }
          else{
            return LineItem.create(
              {
                product_id:         data.product_id,
                price:              data.price,
                total_line:         data.quantity * data.price,
                quantity:           data.quantity,
                purchase_order_id: purchaseOrder.id
              }
            )
            .then(lineItems => res.status(201).send(lineItems))
            .catch(error => res.status(400).send(error));
          }
        }).catch((error) => res.status(400).send(error));
			}

		}
	},

	delete(req, res){
		if(req.params.id){
			LineItem.findById(req.params.id)
			.then(line_item => {
				if(!line_item){
					res.status(404).send({
						message: 'LineItem not found'
					});
				}
				else{
					line_item.destroy()
					.then(() => res.status(200).send({
						success: true,
						message: 'LineItem deleted'
					}))
					.catch(error => res.status(400).send(error));
				}
			})
			.catch(error => res.status(400).send(error));
		}else{
			res.status(404).send({
				message: 'LineItem not found'
			});
		}
	},
};
