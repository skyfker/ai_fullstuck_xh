//引入express
const express = require('express') ;
const expressWs = require('express-ws')(express());
const app = expressWs.app;
// 创建监听端口
const port = 3600;

const {Ollama} = require('@langchain/community/llms/ollama')

const model = new Ollama({
    baseUrl: 'http://localhost:11434', //ollama本地服务的地址
    model:'deepseek-r1:1.5b'
})

// 提供一个deepseek接口
app.ws('/test', (ws, req) => {
    //由web端传递过来的消息
    ws.on('message', async (msg) => {
        const stream = await model.stream(msg)
        for await (const str of stream) {
            console.log(str)
            ws.send(JSON.stringify({data: str, isEnd: false}))
        }
        ws.send(JSON.stringify({data: '', isEnd: true}))
    })
    ws.on('open', () => {
        console.log('serve.open')
    })
    ws.on('error', () => {
        console.log('serve.error')
    })
    ws.on('close', () => {
        console.log('serve.close')
    })
    
}
);  

//启动服务
app.listen(port, () => {
    console.log(`服务已启动，监听端口${port}`);
});