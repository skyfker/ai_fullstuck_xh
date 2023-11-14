
var num = 1213
num.a = 'hello'
console.log(num.a);  //undefined

var num = new Number(123)
num.a = 'hello'
delete num.a
console.log(num.a);

//考点
var arr = [1,2,3,4]
arr.length = 2
console.log(arr);

var str = 'abcd'