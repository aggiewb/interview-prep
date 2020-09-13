/*
https://www.freecodecamp.org/learn/coding-interview-prep/rosetta-code/fibonacci-sequence
Write a function to generate the nth Fibonacci number.

The nth Fibonacci number is given by:

Fn = Fn-1 + Fn-2

The first two terms of the series are 0 and 1.

Hence, the series is: 0, 1, 1, 2, 3, 5, 8, 13...
*/ 

function fibonacci(n) {
    let current = 0;
    let next = 1;
    
    if(n === 0){
      return current;
    }else if(n === 1){
      return next;
    }
  
    for(let i = 0; i < n; i++){
      const temp = current + next;
      current = next;
      next = temp;
    }
    return current;
}