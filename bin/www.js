const http = require('http');
const app = require('../app'); // The express app we just created
const conf_var = require('../server/config/config_var.js'); // The express app we just created

const port = parseInt(process.env.PORT, 10) || 8000;
app.set('port', port);
app.set('jwt_secret', conf_var.jwt_secret);

const server = http.createServer(app);
server.listen(port);
console.log(conf_var.jwt_secret)
console.log('Magic happens on port ' + port);
