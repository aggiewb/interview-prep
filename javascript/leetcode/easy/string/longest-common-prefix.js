/*
https://leetcode.com/explore/interview/card/top-interview-questions-easy/127/strings/887/
*/

function longestCommonPrefix(strs){
    const strsLength = strs.length;

    if(strsLength === 0){
        return "";
    }

    let prefix = strs[0];

    for(let i = 1; i < strs.length; i++){
        const word = strs[i];

        while(word.indexOf(prefix) !== 0){
            prefix = prefix.substring(0, prefix.length - 1);

            if(prefix === ""){
                return prefix;
            }
        }
    }
    return prefix;
}