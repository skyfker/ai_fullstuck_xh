let obj = {
    name: 'li',
    age: 18,
    a: {
        n : 1
    },
    b: undefined,
    c: null,
    d: function() {},
    e: Symbol('hello'),
    f: {
        n: 100
    }
}

function deepCopy (obj){
    let objCopy = {}
    for (let key in obj){
        if (obj.hasOwnProperty(key)){
            // 区分obj[key]原始类型和引用类型
            if(obj[key] instanceof Object){     // 不能直接赋值
                objCopy[key] = deepCopy(obj[key])
            }else{
                objCopy[key] = obj[key]
            }
        }
    }
}

let obj2 = deepCopy(obj)