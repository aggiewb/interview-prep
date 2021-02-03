/*
https://www.freecodecamp.org/learn/coding-interview-prep/rosetta-code/count-occurrences-of-a-substring

Create a function, or show a built-in function, to count the number of non-overlapping occurrences of a substring inside a string.

The function should take two arguments:

    the first argument being the string to search, and
    the second a substring to be searched for.

It should return an integer count.

The matching should yield the highest number of non-overlapping matches.

In general, this essentially means matching from left-to-right or right-to-left.
*/

function countSubstring(str, subStr) {
    let found = 0;
    for(let i = 0; i < str.length; i++){
      const foundIndex = str.indexOf(subStr);
      if(foundIndex > -1){
        found++;
        str = str.substring(foundIndex + subStr.length - 1);
      } else {
          break;
      }
    }
    return found;
}