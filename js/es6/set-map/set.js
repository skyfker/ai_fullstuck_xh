// set 对象
// 对象成员是唯一的
// 有长度

// let s = new Set([1, 1, 2, 2, 3, 3])

// console.log(s.size);



let s = new Set([1, 2, 3])
// s.add(4)
// s.delete(1)
// 不能改
// console.log(s.has(1));
// s.clear() 

// s.forEach((value, key, s) => {
//     console.log(value,key,s);
// })

// for(let value of s.value()) {
//     console.log(value);
// }

// for(let value of s.keys()) {
//     console.log(keys);
// }

for(let value of s.entries()) { // s.entries() === [[1,1], [2,2],[3,3]]
    console.log(entries);
}