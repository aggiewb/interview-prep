/*
https://leetcode.com/explore/interview/card/top-interview-questions-easy/127/strings/885/

 @param {string} haystack
 @param {string} needle
 @return {number}
*/

const strStr = function(haystack, needle){
    const needleLength = needle.length;
    
    if(haystack === needle || needle === ''){
        return 0;
    }
    
    let iterator = 0;
    let haystackSubstring = haystack.substring(iterator, iterator + needleLength);
    
    while(haystackSubstring !== ''){
        if(haystackSubstring === needle){
            return iterator;
        }
        iterator++;
        haystackSubstring = haystack.substring(iterator, iterator + needleLength);
    }
    
    return -1;
}