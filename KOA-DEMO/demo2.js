const Koa = require('koa')
const app = new Koa()

const main = (ctx) => { // ctx === rep + res
    // console.log(ctx.query.id);
    // ctx.body = `hello ${ctx.query.id}`

    console.log(ctx.url);
    if(ctx.url.startsWith('/login')) {
        //前端在登录
        ctx.body = {
            code: 200,
            msg: '登录成功',
            data: {
                token: '123456'
            }

        }
    } else if(ctx.url.startsWith('/home')) {
        //前端首页数据
        ctx.body = {
            code: 200,
            msg: '首页数据',
            data: {
                name: '张三',
                age: 18
            }
        }
    } else {
        //前端在访问
    }
}

app.use(main)

app.listen(3000, () => {
    console.log('server is running at http://127.0.0.1:3000');
});