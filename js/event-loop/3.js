console.log('start');
async function async1() {
    await async2() //await 一脚把后续代码踹到微任务队列里,它自己也是微任务。但是浏览器给await开小灶提速，它会直接执行
    console.log('saync1 end');
}
async function async2() {
    console.log('saync2 end');
}
async1()
setTimeout(function () {
    console.log('setTimeout');
}, 0)
new Promise((resolve) => {
    console.log('promise');
    resolve()
})
    .then(() => {
        console.log('then1');
    })
    .then(() => {
        console.log('then2');
    })
console.log('end');
