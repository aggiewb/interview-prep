/*
https://www.freecodecamp.org/learn/coding-interview-prep/project-euler/problem-3-largest-prime-factor

The prime factors of 13195 are 5, 7, 13 and 29.
What is the largest prime factor of the given number?
*/ 

function largestPrimeFactor(number) {
    let largestPrimeFactor = number;
    if(number % 2 === 0){
      largestPrimeFactor = 2;
      return largestPrimeFactor;
    }
  
    for(let i = 3; i < largestPrimeFactor; i+=2){
      if(largestPrimeFactor % i === 0){
        largestPrimeFactor = largestPrimeFactor / i;
      }
    }
    return largestPrimeFactor;
}