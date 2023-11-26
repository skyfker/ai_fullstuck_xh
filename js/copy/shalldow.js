let obj = {
    name: 'tom',
    age: 18,
    like: {
        n : 'coding'
    }
}

function shalldowCopy(){
    // 不是引用类型就不拷贝
    if(!(obj instanceof Object || obj == null)) return
    // 如果obj是数组，就创建数组，如果是对象，就创建对象
    let objCopy = obj instanceof Array ? [] : {}
    for (let key in obj) {
        if(o.hasOwnProperty(key)){
            objCopy[key] = obj[key]
        }
    }
    return objCopy
}

let newObj = shalldowCopy(obj)


// for (let key in o) {
//     if(o.hasOwnProperty(key)){

//     }
// }