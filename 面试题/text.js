// var foo = {}
// var F = function(){}
// Object.prototype.a = 'value a';
// Function.prototype.b = 'value b';
// console.log(foo.a)
// console.log(foo.b)
// console.log(F.a)
// console.log(F.b) 

// // foo.__proto__=Object.prototype
// // F.__proto__=Function.prototype
// // F.__proto__.__proto__=Object.prototype




// Function.prototype.a = () => alert(1) 
// Object.prototype.b = () => alert(2); 
// function A() {} 
// const a = new A(); 
// a.a();
// a.b();
// Object.a()

// // a.__proto__=A.prototype
// // A.__proto__.__proto__=A.prototype.__proto__=Object.prototype
// // A.__proto__=Function.prototype

// // 1 7 5 100 2 Promise 3 

// console.log(Object(undefined));

function deepCopy(obj) {
    let result = {}
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            if (obj[key] instanceof Object) {
                result[key] = deepCopy(obj[key]);
            }else {
                result[key] = obj[key];
            }
        }
    }
    return result;
}