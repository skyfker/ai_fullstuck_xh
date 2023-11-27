function bubbleSort(arr){
    let len = arr.length;//缓存数组长度
    for(let i = 0; i < len; i++) { //len 轮
        for(let j = 0; j < len - i - 1; j++) {
            //本次的最大值到右边
            if(arr[j] > arr[j+1]) {//相邻元素交换位置
                [arr[j], arr[j+1]] = [arr[j+1], arr[j]]
            }
        }
    }
    return arr
}
const arr = [5, 8, 6, 3, 9, 2, 1, 7]
bubbleSort()