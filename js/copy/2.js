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
obj.e = obj.f
obj.f.n = obj.e      // 循环引用

console.log(JSON.stringify(obj));   // 对象转字符串
console.log(JSON.parse(str));     // 字符串转对象


let obj2 = JSON.parse(JSON.stringify(obj))
obj.a.n = 11
console.log(obj2);