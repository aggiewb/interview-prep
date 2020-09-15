/*
https://www.freecodecamp.org/learn/coding-interview-prep/rosetta-code/symmetric-difference

Given two sets A and B, compute (A∖B)∪(B∖A). That is, enumerate the items that are in A or B but not both. 
This set is called the symmetric difference of A and B. In other words: (A∪B)∖(A∩B)

(the set of items that are in at least one of A or B minus the set of items that are in both A and B).

Write a function that takes two arrays as parameters and returns the symmetric difference. 
Sort the resultant array before returning it.
*/ 

function symmetricDifference(A, B) {
    const inANotB = diffHelper(A, B);
    const inBNotA = diffHelper(B, A);
    return inANotB.concat(inBNotA).sort();
}
  
function diffHelper(main, compare){
    const arrDiff = main.reduce((symDiff, item) => {
    if(compare.indexOf(item) === -1){
        symDiff.push(item);
    }
      return symDiff;
    },[]);
    return arrDiff;
}