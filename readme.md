# INSENSE APIs

[TUTORIAL](https://scotch.io/tutorials/getting-started-with-node-express-and-postgres-using-sequelize)

### Installation

Steps.
  - Install or use PostgreSQL 9.4 or higher but lower than 10.x
  - Install [NVM](https://github.com/creationix/nvm)
  - Install node js v 6.3.1
Use this to install node version.
```sh
$ nvm install 6.3.1
```
Open folder project and use
```sh
$ nvm use
```

Use this to install dependencies.
```sh
$ npm install --save
```
Or install manually
  - npm install express
  - npm install pg
  - npm install pg-hstore
  - npm install sequelize
  - npm install sequelize-cli
  - npm install body-parser
  - npm install morgan
  - npm install jsonwebtoken
  - npm install pm2(node js server deamon)

If for any reason you see an error with symlink you can use
```sh
$ npm install --save --no-bin-links
```

Create a new db in postgres, after that edit file config/config.json to use your db credentials

Then run
```sh
sql> CREATE EXTENSION hstore;
$ sequelize db:migrate
$ sequelize db:seed:all
```
In case sequelize or any othe other packages are not recognized after installing, try to re-installing them repeating the installation commands but adding the parameter -g to install the package globally. Example: 
```sh
$ npm install -g sequelize
```

In case postgres doesn't recognize hstore field type, run this:
```
$ psql template1 -c 'create extension hstore;'
$ psql your_application_db -c 'create extension hstore;'
```

In case postgres doesn't recognize "jsonb" field type, probably you are using postgres 9.3 or lower, use 9.4 or higher please.

if you want to rollback migration run
Then run
```sh
$ db:migrate:undo:all // rollback all migration
$ db:migrate:undo // rollback last migration
```
Remember to make sure to specify you are working with development environment, define it on the file "server/models/index.js"
```
const env = process.env.NODE_ENV || 'development';
```

After install dependencies run pm2.

```sh
$ pm2 start bin/www.js
```
or

```sh
$ pm2 start ecosystem.config.js
```
By default the express server port running at 8000, you can change the port in bin/www.js file.

```sh
Default port 8000
```

### Development run

```sh
nodemon bin/www.js
node bin/www.js
```

### Methods todo

| method | authenticate |  type | URL|
| ------ | ------ | ------ | ------ |
| authenticate | no | post | [http://your-ip:8000/api/authenticate](http://your-ip:8000/api/authenticate) |
| index | yes | get | [http://your-ip:8000/api/todos](http://your-ip:8000/api/todos) |
| create | yes | post | [http://your-ip:8000/api/todos](http://your-ip:8000/api/todos) |
| update | yes | put | [http://your-ip:8000/api/todos/:todo_id](http://your-ip:8000/api/todos/:todo_id) |
| destroy | yes | delete | [http://your-ip:8000/api/todos/:todo_id](http://your-ip:8000/api/todos/:todo_id)|
| show | yes | get | [http://your-ip:8000/api/todos/:todo_id](http://your-ip:8000/api/todos/:todo_id) |
