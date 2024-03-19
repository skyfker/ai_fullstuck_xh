const Router = require('@koa/router');
const router = new Router();
const { userLogin, userFound, userInsert } = require('../controllers/mysqlControl')
router.prefix('/user');  //添加路由前缀

//定义接口
router.post('/login', async(ctx) => {
    console.log(ctx.request.body); // 获取到了前端传递的参数
    const { username, password } = ctx.request.body;

    try {
        const result = await userLogin(username, password);
        // console.log(result)
    
        if(result.length) { // 查到了
            let data = {
                id: result[0].id,
                nickname: result[0].nickname,
                username: result[0].username
            }
    
            ctx.body = {
                code: '8000',
                msg: '登录成功',
                data: {
                    username,
                    password
                }
            }       
        } else {
            ctx.body = {
                code: '8001',
                msg: '账号或密码错误',
                data: 'error'
            }
        }
    }catch (error) {
        ctx.body = {
            code: '8002',
            msg: '服务器异常',
            data: 'error'

        }
    }


})

//定义注册接口
router.post('/register', async(ctx) => {
    console.log(ctx.request.body);
    const { username, password, nickname } = ctx.request.body;
    if(!username || !password || !nickname) {
        ctx.body = {
            code: '8003',
            msg: '账号密码或昵称不能为空',
        }
        }
    
    try {
        // 校验数据库中是否有该用户
        const findRes = await userFound(username);
        // console.log(findRes);
        if (findRes.length) { //用户已存在
            ctx.body = {
                code: '8004',
                msg: '该用户已存在',
                data: 'error'
            }
            return;
        } 
        //写入数据库中
        const insertRes = await userInsert(username, password, nickname);
        console.log(insertRes);
        if (insertRes.affectedRows) { //写入成功
            ctx.body = {
                code: '8000',
                msg: '注册成功',
                data: 'success'
            }
        } else {
            ctx.body = {
                code: '8006',
                msg: '注册失败',
                data: 'error'
            }
        }
    }catch (error) {
        ctx.body = {
            code: '8004',
            msg: '服务器异常',
        }
    }

})

module.exports = router;