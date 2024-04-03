// class Person {
//     constructor(name) {
//         this.name = name;
//     }
//     static getInfo(name) {
//         if (!Person.instance) {
//             Person.instance = new Person(name)
//         }
//         return new Person(name)
//     }
// }
// let p1 = new Person.getInfo()
// let p2 = new Person.getInfo()

// console.log(p1 === p2);



function storage() {
    this.name = '张麻子'
}


const Person = (function () {
    let instance = null;
    return function() {
        if (!instance) {
            instance = new storage()
        }
        return instance
    }
})()

let p1 = new Person
let p2 = new Person

console.log(p1 === p2);