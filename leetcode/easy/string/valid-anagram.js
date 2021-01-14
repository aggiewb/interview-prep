/*
https://leetcode.com/explore/interview/card/top-interview-questions-easy/127/strings/882/
*/ 

const isAnagram = function(s, t) {
    let isAnagram = false;
    if(s.length !== t.length){
        return isAnagram;
    } 
    
    if(s.length === 0 && t.length === 0){
        isAnagram = true;
        return isAnagram;
    }
    
    const sSortedStr = s.split('').sort().toString();
    const tSortedStr = t.split('').sort().toString();
    
    if(sSortedStr === tSortedStr){
        isAnagram = true;
        return isAnagram;
    }
    
    return isAnagram; 
};