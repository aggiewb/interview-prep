/*
https://leetcode.com/explore/interview/card/top-interview-questions-easy/92/array/559/
*/

const plusOne = function(digits) {
    for(let i = digits.length - 1; i >= 0; i--){
        digits[i]++;
        
        if(digits[i] > 9){
            digits[i] = 0;
        } else {
            return digits;
        }
    }
    
    if(digits[0] === 0){
        digits.unshift(1);
    }
    return digits;
};