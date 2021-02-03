/*
https://leetcode.com/explore/interview/card/top-interview-questions-easy/92/array/646/
*/

const rotate = function(nums, k) {
    for(let i = 0; i < k; i++){
        const numToMove = nums.pop();
        nums.unshift(numToMove);
    }
};