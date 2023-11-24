Car.prototype.name = 'BMW'
Car.prototype.lang = 4900
Car.prototype.height = 1400
// Car.prototype = {
//     name : 'BMW',
//     lang : 4900,
//     height : 1400
// }

function Car(owner,color) {
    // this.name = 'BMW'
    // this.lang = 4900
    // this.height = 1400
    this.owner = owner
    this.color = color
}

let car = new Car('小A','red')
let car2 = new Car('小B','pink')

// car.name = '奔驰'
// console.log(car.name);//奔驰
// console.log(car);
// console.log(car2.name);//BWM
// console.log(car2);


console.log(car.__proto__===Car.prototype);
console.log(car.__proto__);
