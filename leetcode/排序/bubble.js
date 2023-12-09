let arr = [2, 6, 5, 4, 3]

// arr.sort((a,b) => {
//     return a-b  //倒过来排 b-a
// })

function bubbleSort(arr) {
    // const res = []

    // while(arr.length) { //捞的吗，淌口水。时间复杂3n^2
    //     let min = Math.min(...arr)
    //     res.push(min)
    //     let index = arr.indexOf(min)
    //     arr.splice(index,1)
    // }

    // return res
    for(let i=0;i<arr.length;i++) {
        for(let j=i+1;j<arr.length;j++) {
            if(arr[i] > arr[j]) {
                [arr[i],arr[j] = arr[j],arr[i]]
            }
        }
    }
    
    return arr
}
