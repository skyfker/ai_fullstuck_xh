//到底做了什么？ 函数放到 event loop 中
setTimeout(() => {
    // console.log('1000ms以后');
}, 1000);

const p = new Promise((resolve, reject) => {
    console.log('实例化promise');
    //异步任务
    setTimeout(() => {
        console.log('定时器运行');
    }, 1000)
    resolve()  // 确认执行成功
})
// console.log(p.__proto__);

p.then(function () {
    console.log('1000ms后运行，hello wold');
})
// console.log('hello');
