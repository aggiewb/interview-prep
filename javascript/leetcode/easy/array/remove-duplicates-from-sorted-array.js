/*
https://leetcode.com/explore/interview/card/top-interview-questions-easy/92/array/727/
*/

const removeDuplicates = function(nums) {
    for(let i = 0; i < nums.length; i++){
        const num = nums[i];
        while(nums.lastIndexOf(num) !== i){
            nums.splice(i, 1);
        }
    }
    return nums.length;
};