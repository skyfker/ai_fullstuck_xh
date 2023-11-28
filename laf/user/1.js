function sleep(t) {
    const p = new Promise(resolve => {
        setTimeout(() => {
            resolve('promise返回的hello world')
        }, t)
    })
    return p
}
// 异步通过promise 的then变成了同步
sleep(1000)
    .then((msg) => {
        console.log(msg, '-----');
    })
// 函数返回一个promise
// then 里面

// 声明这个函数里有异步
// async + await 是一对，要一起出来
(async function () {
    //耗时任务 promise的实例
    const fetcher = await fetch('https://qhabzb.laf.run/get-list')
    const data = await res.json()
    console.log(data);
    console.log('ok');
})()