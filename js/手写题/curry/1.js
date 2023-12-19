function add(a, b, c) {
    return a + b + c 
}

console.log(add.length); //函数参数的数量

function curry(fu) {
    let judge = (...args) => {
        if(args.length === fn.length) return fn(...args)
        return(...arg) => judge(...args, ...arg)
    }
    return judge
}

curry(add)
let addCurry = curry(add)
addCurry(1)(2)(3)