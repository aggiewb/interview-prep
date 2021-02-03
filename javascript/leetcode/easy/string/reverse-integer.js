/*
https://leetcode.com/submissions/detail/442111336/?from=explore&item_id=880
*/ 

const reverse = function(x) {
    let numArr = `${x}`.split('');
    const lastIndex = numArr.length - 1;
    if(numArr[0] === '-'){
        numArr.splice(0, 1);
    }
    
    for(let i = 0; i < numArr.length / 2; i++){
        const temp = numArr[i];
        numArr[i] = numArr[lastIndex - i];
        numArr[lastIndex - i] = temp;
    }
    
    if(numArr[0] === 0){
        numArr.splice(0, 1);
    }
    
    let reversedNum = parseInt(numArr.join(''));
    if(x < 0){
        reversedNum *= -1;  
    }
    
    return reversedNum < (Math.pow(2, 31) * - 1) || reversedNum > (Math.pow(2, 31) - 1) ? 0 : reversedNum;
};