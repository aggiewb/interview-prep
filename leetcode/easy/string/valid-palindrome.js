/*
https://leetcode.com/explore/interview/card/top-interview-questions-easy/127/strings/883/
*/

const isPalindrome = function(s) {
    const regex = /[_\W\s]+/g;
    s = s.replace(regex, '').toLowerCase();
    const sLength = s.length;
    
    for(let i = 0; i < sLength; i++){
        if(s[i] !== s[sLength - 1 - i]){
            return false;
        }
    }
    
    return true;
};