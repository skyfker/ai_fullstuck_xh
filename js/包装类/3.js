//对象的创建

var obj = {} //对象字面量

var obj2 = new Object() //构造函数

//自定义构造函数

function Car(color){
    this.name = 'BMW'
    this.height = 1400
    this.lang = 4900
    this.weight = 1000
    this.color = color
}

let car = new Car('green') //实例对象 == this
let car2 = new Car('red') 

car.name = '幻影'
console.log(car2);