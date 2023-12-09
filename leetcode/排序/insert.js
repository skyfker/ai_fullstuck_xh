let arr = [2, 6, 5, 4, 3]

//认定第一个元素一定是有序的，从第二个元素开始，去找自己在前面已经有序的区间中的位置

function insertSort (arr) {
    const len = arr.length
    for(let i = 0;i<len;i++){
        let j = i
        temp = arr[i]

        while(j>0 && temp < arr[j - 1]) { //找到temp 能插队的位置
            arr[j] = arr[j-1]
            j--
        }

        arr[j] = temp
    }
    return arr
}