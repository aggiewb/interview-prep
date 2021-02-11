/*
https://leetcode.com/explore/interview/card/top-interview-questions-easy/127/strings/879/
*/ 
const reverseString = function(s) {
    const lastIndex = s.length - 1;
    for(let i = 0; i < s.length / 2; i++){
        const temp = s[i];
        s[i] = s[lastIndex - i];
        s[lastIndex - i] = temp;
    }
};