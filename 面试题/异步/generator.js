// // function* foo() {
// //   yield 'a'
// //   yield 'b'
// //   return 'ending'
// //   yield 'd'
// // }
// // let gen = foo()  //得到一个指向内部状态的指针对象

// // console.log(gen.next());  // { value: 'a', done: false }
// // console.log(gen.next());  // { value: 'b', done: false }
// // console.log(gen.next());  // { value: 'ending', done: true }
// // console.log(gen.next());  // { value: 'ending', done: true }



// function* foo() {
//   var o = 1
//   yield o++   // o = yield 2
//   yield o++  // o = yield 3
//   yield o++   // o = yield 4
  
// }
// let gen = foo()

// console.log(gen.next());  // { value: 1, done: false }
// console.log(gen.next());  // { value: 2, done: false }
// console.log(gen.next());  // { value: 3, done: false }
// console.log(gen.next());  // { value: , done: false }


function* foo() {
    var o = 1
    var a = yield o++   // 
  
    console.log(a);
    var b = yield o++
  }
  
  let gen = foo()
  
  console.log(gen.next()); // { value: 1, done: false }
  console.log(gen.next(2)); // { value: 1, done: false }