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

async function foo() { //相当于 return new Promise((resolve, reject) => {})
    await xq() // await 相当于 .then
    await marry()
    baby()
}
foo()