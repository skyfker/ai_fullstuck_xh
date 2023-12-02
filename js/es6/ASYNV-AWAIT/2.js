function xq() {
    return new Promise((resolve, reject) => {
        setTimeout (() => {
            console.log('涛涛相亲了');
            resolve('相亲成功') //resolve 被调用  .then 才会生效
        },2000)
    })
}

function marry() {
    return new Promise((resolve, reject) => {
        setTimeout (() => {
            console.log('涛涛结婚了');
            resolve()
        },1000)
    })
}

function baby() {
    console.log('小小涛');
}

xq()
.then((res) => {  // .then 默认返回一个Promise对象 所以第2个.then 认错了（需要接到marry后）。所以return marry
    return marry()
})
.then(() => {
    baby()
})


