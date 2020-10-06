/*
https://www.freecodecamp.org/learn/coding-interview-prep/rosetta-code/generate-lower-case-ascii-alphabet

Write a function to generate an array of lower case ASCII characters for a given range. 
For example, given the range ['a', 'd'], the function should return ['a', 'b', 'c', 'd'].
*/

function lascii(cFrom, cTo) {
    const fromAscii = cFrom.charCodeAt(0);
    const toAscii = cTo.charCodeAt(0);
    const range = [cFrom];
  
    for(let i = fromAscii + 1; i <= toAscii; i++){
      range.push(String.fromCharCode(i));
    }
    return range;
}