/*
https://leetcode.com/explore/interview/card/top-interview-questions-easy/92/array/549/
*/ 
const singleNumber = function(nums) {
    for(let i = 0; i < nums.length; i++){
        const num = nums[i];
        if(nums.lastIndexOf(num) === nums.indexOf(num)){
            return num;
        }  
    }
};