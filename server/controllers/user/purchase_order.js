const PurchaseOrder = require('../../models').PurchaseOrder;
const LineItem = require('../../models').LineItem;
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
				return PurchaseOrder.create({
					user_id:       decoded.payload.user_id,
					status:        'pending',
          order_id:      uuid.v4(),
					total_amount:  0,
				})
				.then(purchase_order => res.status(201).send(purchase_order))
				.catch(error => res.status(400).send(error));
			}

		}
	},
	// Retrieve all records using pagination and order
	list(req, res){
		// Number of records for page
		let limit = 10;
  	let offset = 0;
		const token = req.body.token || req.query.token || req.headers['x-access-token'];
		var decoded = jwt.decode(token, {complete: true});

		// selected page
		const page = req.params.page == null ?  1 : req.params.page;
		const order = req.params.order == null ?  'ASC' : req.params.order.toUpperCase();
		const orderColumn = 'updatedAt';
		if(order == "ASC" || order == "DESC"){
			// Count all record to display
			return PurchaseOrder.findAndCountAll({
				attributes: ['id', 'order_id', 'total_amount','status', 'createdAt', 'updatedAt'],
				where: {
					user_id: decoded.payload.user_id
				}
			})
			.then((data) => {
				// calculate the number of pages
				const pages = Math.ceil(data.count / limit);
				offset = limit * (page - 1);
				// calculate results using limit and offset
				PurchaseOrder.findAll({
					attributes: ['id', 'order_id', 'total_amount','status', 'createdAt', 'updatedAt'],
					limit: limit,
		      offset: offset,
		      $sort: { id: 1 },
					include: [
						{ model: LineItem, as: 'line_items' }
					],
					where: {
						user_id: decoded.payload.user_id
					},
					order: [
						[orderColumn, order]
					]
				})
				.then(purchase_orders => res.status(200).send(
					{
						'result': purchase_orders,
						'records': data.count,
						'pages': pages,
						'current_page': page
					}
				))
				.catch(error => res.status(400).send(error));
			})
			.catch(error => res.status(400).send(error));
		}
		else{
			res.status(404).send({
				message: 'Please provide a valid sort method'
			});
		}
	},
	// find purchase_order by ID
	find(req, res){
		if(req.params.id){
			PurchaseOrder.findById(req.params.id,{
				attributes: ['id', 'order_id', 'total_amount','status', 'createdAt', 'createdAt'],
				include: [
					{ model: LineItem, as: 'line_items' }
				]
			})
			.then(purchase_order => {
				if(!purchase_order){
					res.status(404).send({
						message: 'PurchaseOrder not found'
					});
				}
				else if (purchase_order.status == false) {
					res.status(404).send({
						message: 'PurchaseOrder not found'
					});
				}
				else{
					res.status(200).send(purchase_order);
				}
			})
			.catch(error => res.status(400).send(error));
		}else{
			res.status(404).send({
				message: 'PurchaseOrder not found'
			});
		}
	},

	completed(req, res){
		if(!req.is('application/json')){
			res.status(403).send({
				success: false,
				message: "Expected application/json"
			});
		}
		else{
			if(req.params.id){
				PurchaseOrder.findById(req.params.id, {
					attributes: ['id', 'order_id', 'total_amount','status', 'createdAt', 'createdAt'],
					include: [
						{ model: LineItem, as: 'line_items' }
					],
				})
				.then(purchase_order => {
					if(!purchase_order){
						res.status(404).send({
							message: 'PurchaseOrder not found'
						});
					}
					else{
						data = req.body || {};
						let total_amount = 0;
						purchase_order.line_items.forEach((product, index) => {
						  total_amount += product.dataValues.total_line;
						});
						purchase_order.update({
							status: "completed",
							total_amount: total_amount
						})
						.then(purchase_order => res.status(200).send(purchase_order))
						.catch(error => res.status(400).send(error));
					}
				})
				.catch(error => res.status(400).send(error));
			}else{
				res.status(404).send({
					message: 'PurchaseOrder not found'
				});
			}
		}
	},

	canceled(req, res){
		if(!req.is('application/json')){
			res.status(403).send({
				success: false,
				message: "Expected application/json"
			});
		}
		else{
			if(req.params.id){
				PurchaseOrder.findById(req.params.id, {
					attributes: ['id', 'order_id', 'total_amount','status', 'createdAt', 'createdAt'],
				})
				.then(purchase_order => {
					if(!purchase_order){
						res.status(404).send({
							message: 'PurchaseOrder not found'
						});
					}
					else{
						data = req.body || {};
						purchase_order.line_items.forEach((product, index) => {
						  total_amount += product.dataValues.total_line;
						});
						purchase_order.update({
							status: "completed",
							total_amount: total_amount
						})
						.then(purchase_order => res.status(200).send(purchase_order))
						.catch(error => res.status(400).send(error));
					}
				})
				.catch(error => res.status(400).send(error));
			}else{
				res.status(404).send({
					message: 'PurchaseOrder not found'
				});
			}
		}
	},


	delete(req, res){
		if(req.params.id){
			PurchaseOrder.findById(req.params.id)
			.then(purchase_order => {
				if(!purchase_order){
					res.status(404).send({
						message: 'PurchaseOrder not found'
					});
				}
				else if (purchase_order.status == false) {
					res.status(404).send({
						message: 'PurchaseOrder not found'
					});
				}
				else{
					purchase_order.update({
						status: false
					})
					.then(() => res.status(200).send({
						success: true,
						message: 'PurchaseOrder deleted'
					}))
					.catch(error => res.status(400).send(error));
				}
			})
			.catch(error => res.status(400).send(error));
		}else{
			res.status(404).send({
				message: 'PurchaseOrder not found'
			});
		}
	},
};
