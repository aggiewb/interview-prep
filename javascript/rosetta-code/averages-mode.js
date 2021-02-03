/*
https://www.freecodecamp.org/learn/coding-interview-prep/rosetta-code/averagesmode

Write a program to find the mode value of a collection.

The case where the collection is empty may be ignored. Care must be taken to handle the case where the mode is non-unique.

If it is not appropriate or possible to support a general collection, use a vector (array), if possible. 
If it is not appropriate or possible to support an unspecified value type, use integers.
*/ 

function mode(arr) {
    const sortedArr = arr.sort();
    let currentNum = sortedArr[0];
    let currentTimesFound = 1;
    let mostTimesFound = 0;
    const modeArr = [];
    for(let i = 1; i < sortedArr.length; i++){
      const nextNum = sortedArr[i];
      if(nextNum === currentNum){
        currentTimesFound++;
      } else {
        if(currentTimesFound === mostTimesFound){
          modeArr.push(currentNum);
        } else if(currentTimesFound > mostTimesFound){
          mostTimesFound = currentTimesFound;
          modeArr.splice(0);
          modeArr.push(currentNum);
        }
        currentNum = nextNum;
        currentTimesFound = 1;
      }
    }
    
    if(currentTimesFound === mostTimesFound){
      modeArr.push(currentNum);
    } else if(currentTimesFound > mostTimesFound){
      modeArr.splice(0);
      modeArr.push(currentNum);
    }
    
    return modeArr;
}