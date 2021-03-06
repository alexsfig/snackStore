const Product = require('../../models').Product;
const LogProduct = require('../../models').LogProduct;

module.exports = {

	create(req, res){
		data = req.body || {};
		if(!data || Object.keys(data).length === 0){
			res.status(403).send({
				success: false,
				message: 'Expected application/json data'
			});
		}
		else{
			return Product.create({
				name:        data.name,
				description: data.description,
				stock:       data.stock,
				price:       data.price,
				likes:       0
			})
			.then(product => res.status(201).send(product))
			.catch(error => res.status(400).send(error));
		}
	},
	// Retrieve all records using pagination and order
	list(req, res){
		// Number of records for page
		let limit = 12;
  	let offset = 0;
		// selected page
		const page = req.params.page == null ?  1 : req.params.page;
		const order = req.params.order == null ?  'ASC' : req.params.order.toUpperCase();
		const orderColumn = req.params.orderColumn == null ?  'name' : req.params.orderColumn;
		if(order == "ASC" || order == "DESC"){
			// Count all record to display
			return Product.findAndCountAll({
				where: {
						status: true
				}
			})
			.then((data) => {
				// calculate the number of pages
				const pages = Math.ceil(data.count / limit);
				offset = limit * (page - 1);
				// calculate results using limit and offset
				Product.findAll({
					limit: limit,
		      offset: offset,
		      $sort: { id: 1 },
					where: {
							status: true
					},
					order: [
						[orderColumn, order]
					]
				})
				.then(products => res.status(200).send(
					{
						'result': products,
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
	// find product by ID
	find(req, res){
		if(req.params.id){
			Product.findById(req.params.id)
			.then(product => {
				if(!product){
					res.status(404).send({
						message: 'Product not found'
					});
				}
				else if (product.status == false) {
					res.status(404).send({
						message: 'Product not found'
					});
				}
				else{
					res.status(200).send(product);
				}
			})
			.catch(error => res.status(400).send(error));
		}else{
			res.status(404).send({
				message: 'Product not found'
			});
		}
	},
	findWithLog(req, res){
		if(req.params.id){
			Product.findById(req.params.id, {
				include: [
					{ model: LogProduct, as: 'log_products' }
				],
			})
			.then(product => {
				if(!product){
					res.status(404).send({
						message: 'Product not found'
					});
				}
				else if (product.status == false) {
					res.status(404).send({
						message: 'Product not found'
					});
				}
				else{
					res.status(200).send(product);
				}
			})
			.catch(error => res.status(400).send(error));
		}else{
			res.status(404).send({
				message: 'Product not found'
			});
		}
	},
	// find product by name, return a list of records
	findByName(req, res){
		if(req.params.name){
			Product.findAll(
				{
					where: {
						name: { $like: '%'+ req.params.name +'%' },
						status: true
					}
				}
			)
			.then(product => {
				if(!product){
					res.status(404).send({
						message: 'Product not found'
					});
				}
				else if (product.status == false) {
					res.status(404).send({
						message: 'Product not found'
					});
				}
				else{
					res.status(200).send(product);
				}
			})
			.catch(error => res.status(400).send(error));
		}else{
			res.status(404).send({
				message: 'Product not found'
			});
		}
	},

	update(req, res){
		if(req.params.id){
			Product.findById(req.params.id)
			.then(product => {
				if(!product){
					res.status(404).send({
						message: 'Product not found'
					});
				}
				else if (product.status == false) {
					res.status(404).send({
						message: 'Product not found'
					});
				}
				else{
					data = req.body || {};
					const previous_price = product.price
					return product.update({
						name: data.name || product.name,
						description: data.description || product.description,
						stock: data.stock || product.stock,
						price: data.price || product.price,
						likes: data.likes || product.likes
					})
					.then(product => {
						if (data.price != previous_price) {
							return LogProduct.create({
								product_id: product.id,
								previous_price: previous_price,
								new_price: data.price
							}).then(product_log => res.status(200).send(product))
							.catch(error => res.status(400).send(error));
						}
						else{
							res.status(200).send(product)

						}
					})
					.catch(error => res.status(400).send(error));
				}
			})
			.catch(error => res.status(400).send(error));
		}else{
			res.status(404).send({
				message: 'Product not found'
			});
		}

	},

	like(req, res){
		if(req.params.id){
			Product.findById(req.params.id)
			.then(product => {
				if(!product){
					res.status(404).send({
						message: 'Product not found'
					});
				}
				else if (product.status == false) {
					res.status(404).send({
						message: 'Product not found'
					});
				}
				else{
					data = req.body || {};
					product.update({
						likes: product.likes + 1
					})
					.then(product => res.status(200).send(product))
					.catch(error => res.status(400).send(error));
				}
			})
			.catch(error => res.status(400).send(error));
		}else{
			res.status(404).send({
				message: 'Product not found'
			});
		}
	},


	delete(req, res){
		if(req.params.id){
			Product.findById(req.params.id)
			.then(product => {
				if(!product){
					res.status(404).send({
						message: 'Product not found'
					});
				}
				else if (product.status == false) {
					res.status(404).send({
						message: 'Product not found'
					});
				}
				else{
					product.update({
						status: false
					})
					.then(() => res.status(200).send({
						success: true,
						message: 'Product deleted'
					}))
					.catch(error => res.status(400).send(error));
				}
			})
			.catch(error => res.status(400).send(error));
		}else{
			res.status(404).send({
				message: 'Product not found'
			});
		}
	},
};
