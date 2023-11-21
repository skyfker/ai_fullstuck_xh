const nums =[9, 2, 3, 6, 7]
// 这个函数不单纯，有副作用，不可靠的函数
function sortArr(arr){
    const res = arr;//同一个地址 引用式赋值
    return res.concat().sort()//concat 不会影响原数组 返回一个全新的数组
}

console.log(sortArr(nums), nums);

// - 排序 冒泡 O(n^2) 快排 O(nlogn)
// nums.sort();
// console.log(nums);