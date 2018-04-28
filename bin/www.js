const http = require('http');
const app = require('../app'); // The express app we just created

const port = parseInt(process.env.PORT, 10) || 8000;
const jwt_secret = '771uidswi7dseeyfr6e7r6u';

app.set('port', port);
app.set('jwt_secret', jwt_secret);

const server = http.createServer(app);
server.listen(port);

console.log('Magic happens on port ' + port);
