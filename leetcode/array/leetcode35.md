# 关于二分查找
```
const n = arr.length
left = 0
right = n-1
while(left<right){
    let mid = (left + right)>>1
    if(arr[mid]<target){
        left = mid + 1
    }else{
        right = mid
    }
}
return left
```
