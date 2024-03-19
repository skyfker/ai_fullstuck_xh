const http = require('http');   //commonJS 

const server = http.createServer((req, res) => { // rep前端的请求， res后端的响应
    console.log(req.url);
})
server.listen(3000, () => {
    console.log('server is running');
})