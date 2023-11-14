let obj = {
    name : '海东鸡',
    age : 20,
}

// console.log(obj['name']);
// obj.age = 21
// obj.girfriend = '老王'
let n = 'girfriend'
obj[n] = '老王'

delete  obj[n]

console.log(obj);