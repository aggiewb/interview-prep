/*
https://leetcode.com/explore/interview/card/top-interview-questions-easy/92/array/578/
*/ 

const containsDuplicate = function(nums) {
    let hasDuplicate = false;
    if(nums.length < 2){
        return hasDuplicate;
    }
    for(let i = 0; i < nums.length; i++){
        if(nums.lastIndexOf(nums[i]) !== i){
            hasDuplicate = true;
            return hasDuplicate;
        }  
    }
    return hasDuplicate;
};