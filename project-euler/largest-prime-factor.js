/*
https://www.freecodecamp.org/learn/coding-interview-prep/project-euler/problem-3-largest-prime-factor

The prime factors of 13195 are 5, 7, 13 and 29.
What is the largest prime factor of the given number?
*/ 

function largestPrimeFactor(number) {
    let largestPrimeFactor = number;
    while(largestPrimeFactor % 2 === 0){
      largestPrimeFactor = largestPrimeFactor / 2;
    }
  
    if(largestPrimeFactor === 1 && number % 2 === 0){
      largestPrimeFactor = 2;
      return largestPrimeFactor;
    }
  
    for(let i = 5; i < largestPrimeFactor; i++){
      if(largestPrimeFactor % i === 0){
        largestPrimeFactor = largestPrimeFactor / i;
      }
    }
    return largestPrimeFactor;
}