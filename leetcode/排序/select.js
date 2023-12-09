let arr = [2, 6, 5, 4, 3]

//找出(选择)原数组中的最小值，放到当前数组的最前方，再缩小区间

function selectSort(arr) {
    const len = arr.length
    let minIndex

    for(let i = 0;i<len;i++) {
        minIndex = i

        for(let j = i;j<len;j++) {
            if(arr[minIndex] > arr[j]) {
                minIndex = j
            }
        }

        if (minIndex !== i) {
            [arr[i],arr[minIndex]] = [arr[minIndex],arr[i]]
        }
    }

    return arr
}
console.log(selectSort(arr));