/*
https://leetcode.com/explore/interview/card/top-interview-questions-easy/127/strings/881/
*/ 

const firstUniqChar = function(s) {
    const sLetterCount = {};
    for(let i = 0; i < s.length; i++){
        const letter = s[i];
        if(!sLetterCount.hasOwnProperty(letter)){
            sLetterCount[letter] = 1;
        } else {
            sLetterCount[letter]++;
        }
    }
    
    for(const [letter, count] of Object.entries(sLetterCount)){
        if(count === 1){
            return s.indexOf(letter);
        }
    }
    
    return -1;
};