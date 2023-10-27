var str ='hello world'  //string字符串
var num = 123       //数字
var flag = false    //boolean 布尔
var un = undefined  //有变量但没值
var n = null
    
//引用类型  对象
var obj = {
    name:'洋洋',
    age:18
}
// console.log(obj.name);

var arr = ['a','b','c',2]

// arr.push(true)    往数组最后一位加一个
// arr.pop()         删除尾部
// arr.unshift('hello') 头部增加
// arr.shift() 尾部删除

// arr.splice(2,1)  下标2删除，长度为1
// arr.splice(2,0,false)   往下标2增加一个 false

// for(var i = 0;i<arr.length;i++){
//     arr[i] = arr[i] + 1
// }
// arr.forEach(function(item, index,arr){ //回调
//     arr[index] = item + 1
// })

// var arr = new Array(4).fill(1)

var arr=[
    [1,2,3,41,5]
    [1,2,3,42,5]
    [1,2,3,43,5]
    [1,2,3,44,5]
    [1,2,3,45,5]
]
for(var i=0;i<arr.length;i++){
    for(var j=0;j<arr[i].length;j++){
        arr[i][j] = ar[i][j] * 10
    }
}  
