//map 对象
// object数据结构中，key只能是字符串

let m = new Map([
    ['name','小明'],
    ['age',18]
]);

// m.set('a',1);
// console.log(m.get('a'));
// m.delete('a')
// console.log(m.has('a'));

// m.set([],1)
// m.set({},1)

m.forEach((val, key, m)=>{
    console.log(val,key);
})