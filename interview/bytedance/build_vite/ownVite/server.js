// koa是node的后端框架
// 服务器端 vite 是用服务器端实现的
const koa = require('koa')
const fs = require('fs') // node 的文件系统  内置的模块
// 实例化Koa，就是一个后端应用OOP
const app = new koa()
// ctx 对象，ctx.body 代表 响应体
app.use(async ctx => {
    // Http 是基于请求响应的简单协议 
    // index.html 返回给用户就看到首页了
    // 字符串二进制流
    // 冯诺依曼原理
    // 代码在内存中运行
    // 读取文件系统里的index.html
    // js 单线程 异步 node支持异步同步化
    // I/O 花时间（代码在内存，而文件在硬盘）
    let content = fs.readFileSync('./index.html', 'utf-8')
    ctx.body = content
})

// 后端启动web服务 监听5174
app.listen(5174, () => {
    console.log('项目在5174端口启动起来了');
})