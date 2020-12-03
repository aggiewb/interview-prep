/*
https://www.freecodecamp.org/learn/coding-interview-prep/rosetta-code/sum-multiples-of-3-and-5

The objective is to write a function that finds the sum of all positive multiples of 3 or 5 below n.
*/

function sumMults(n) {
    let sum = 0;
    for(let i = n - 1; i > 0; i--){
        if(i % 3 === 0){
            sum += i;
        } else if(i % 5 === 0){
            sum += i;
        }
    }
    return sum;
}