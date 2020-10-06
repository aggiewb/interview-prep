/*
https://www.freecodecamp.org/learn/coding-interview-prep/rosetta-code/greatest-common-divisor

Write a function that returns the greatest common divisor of two integers.
*/

function gcd(a, b) {
    const largestNum = Math.max(a, b);
    for(let i = largestNum; i > 1; i--){
      if(a % i === 0 && b % i === 0){
        return i;
      }
    }
    return 1;
}