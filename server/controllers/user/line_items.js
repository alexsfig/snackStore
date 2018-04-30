const PurchaseOrder = require('../../models').PurchaseOrder;
const Product = require('../../models').Product;
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
				Product.findById(data.product_id)
				.then(product =>{
					if (product) {
						if (product.stock >= data.quantity) {
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
											price:      product.price,
											total_line: data.quantity * product.price,
											quantity:   data.quantity,
											purchase_orders: {
												user_id:       	decoded.payload.user_id,
												status:        	'pending',
												order_id:      	uuid.v4(),
												total_amount: 	0
											}
										},
										{
											include: [  purOrder  ]
										}
									)
									.then(lineItems => {
										product.update({
											stock: (product.stock - data.quantity)
										})
										.then(purchase_order => res.status(200).send(lineItems))
										.catch(error => res.status(400).send(error));
										res.status(201).send(lineItems)
									})
									.catch(error => res.status(400).send(error));
								}
								else{
									return LineItem.create(
										{
											product_id:         product.id,
											price:              product.price,
											total_line:         data.quantity * product.price,
											quantity:   				data.quantity,
											purchase_order_id: purchaseOrder.id
										}
									)
									.then(lineItems => {
										product.update({
											stock: product.stock - data.quantity
										})
										.then(purchase_order => res.status(200).send(lineItems))
										.catch(error => res.status(400).send(error));
									})
									.catch(error => res.status(400).send(error));
								}

							}).catch((error) => res.status(400).send(error));
						}
						else{
							res.status(404).send({
								message: 'Product out of stock'
							});
						}
					}
					else{
						res.status(404).send({
							message: 'Product not found'
						});
					}

				})
				.catch((error) => res.status(400).send(error));

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
					return Product.findById(line_item.product_id)
	        .then(product =>{
	          product.update({
	            stock: product.stock + line_item.quantity
	          })
	          .then(product => {
	            line_item.destroy()
	            .then(line_item => {
	              res.status(200).send({
	                message: 'LineItem has been deleted'
	              });
	            })
	            .catch(error => res.status(400).send(error));
	          })
	          .catch(error => res.status(400).send(error));

	        })
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
