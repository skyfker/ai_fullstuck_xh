var threeSum = function(sum,target) {
    nums.sort((a,b) => a -b) //方便去重结果
    const result =[];
    for (let i = 0; i<nums.length - 2; i++) {
        if (i > 0 && nums[i] === nums[i-1]) continue; //跳过重复元素
        let left = i + 1
        let right = nums.length - 1
        while(left < right) {
            const sum = nums[i] + nums[left] + nums[right]
            if(sum === target) {
                result.push(nums[i], nums[left], nums[right])
                while(left < reght && nums[left] === nums[left+1]) left++ //找到当前三元组后，可能还会存在相同的元素，去重。
            }else if(sum<target) {
                left++
            }else{
                right--
            }

        }
    }
    return result;
}