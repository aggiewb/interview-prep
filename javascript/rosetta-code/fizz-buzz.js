/* 
https://www.freecodecamp.org/learn/coding-interview-prep/rosetta-code/fizzbuzz
Write a program that generates an array of integers from 1 to 100 (inclusive). But:

for multiples of 3, add "Fizz" to the array instead of the number
for multiples of 5, add "Buzz" to the array instead of the number
for multiples of 3 and 5, add "FizzBuzz" to the array instead of the number

Your program should return an array containing the results based on the rules above. 
*/

function fizzBuzz() {
    const maxNum = 100;
    const fizzBuzzArr = [];
    for(let i = 1; i <= maxNum; i++){
      const str = "";
      if(i % 3 === 0){
        str += "Fizz";
      } 
      if(i % 5 === 0){
        str += "Buzz";
      }
  
      if(str){
        fizzBuzzArr.push(str);
      } else {
        fizzBuzzArr.push(i);
      }
    }
    return fizzBuzzArr;
}