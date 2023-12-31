var majorityElement = function(nums) {
    // O(n) 时间复杂度  O(1)空间复杂度 --> 投票算法 支持/发对
    let count = 1; // O(1)
    let majority = nums[0]; // O(1)
    for(let i = 1; i<nums.length; i++) {
        if (count == 0) {
            majority = nums[i]  //新的开始
        }
        if (majority === nums[i]) {
            count++;
        } else{
            count--;
        }
    }
    return majority
};