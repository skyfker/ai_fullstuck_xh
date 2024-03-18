const Koa = require('koa');
const bodyParser = require('koa-bodyparser');
const app = new Koa();
const cors = require('koa2-cors'); // 允许跨域
const user = require('./routes/user'); 

app.use(bodyParser())
app.use(cors()) // 允许跨域

// const main = (ctx) => {
//     console.log(ctx.request.body);
// };
// app.use(main);

app.use(user.routes(), user.allowedMethods())

app.listen(3000, () => {
  console.log('app listening on port 3000');
});