/*
https://leetcode.com/problems/two-sum/
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
*/ 

//Brute Force
const twoSum = function(nums, target){
    const numsLength = nums.length;
    for(let i = 0; i < numsLength - 1; i++){
        const firstNum = nums[i];
        for(let j = i + 1; j < numsLength; j++){
            const secondNum = nums[j];
            if(firstNum + secondNum === target){
                return [i, j];
            }
        }
    }
};

//Hash Map
const twoSum = function(nums, target){
    const numsMap = new Map();
    
    for(let i = 0; i < nums.length; i++){
        const currVal = nums[i];
        const targetDiff = target - currVal;
        const mapValue = numsMap.get(targetDiff);

        if(mapValue !== undefined){
            return [mapValue, i];
        } else {
            numsMap.set(currVal, i);
        }
    }
};