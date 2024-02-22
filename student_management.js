const knex = require('./src/connection/mysql');
const jwt = require('jsonwebtoken');
const bodyParser = require('koa-bodyparser');
const Koa = require('koa');
const router = require('./router')

const app = new Koa();

console.log(router.stack.map(i => i.path));
app
    .use(bodyParser())
    .use(router.routes())
    .use(router.allowedMethods)

// server.js
app.listen(3000, () => {
    console.log('Server is running on port 3000');
});