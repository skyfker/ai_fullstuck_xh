var removeDuplicates = function(nums) {
    var i=0;
    for(var j=0;j<nums.length;j++){
        if(nums[i]!==nums[j]){
            i++
            nums[i]=nums[j]
        }
    }
    return i+1
};