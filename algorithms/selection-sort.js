/*
https://www.freecodecamp.org/learn/coding-interview-prep/algorithms/implement-selection-sort


Here we will implement selection sort. 
Selection sort works by selecting the minimum value in a list and swapping it with the first value in the list. 
It then starts at the second position, selects the smallest value in the remaining list, and swaps it with the second element. 
It continues iterating through the list and swapping elements until it reaches the end of the list. 
Now the list is sorted. Selection sort has quadratic time complexity in all cases (O(N^2)).

Instructions: Write a function selectionSort which takes an array of integers as input and 
returns an array of these integers in sorted order from least to greatest.
*/

function selectionSort(array) {
    for(let i = 0; i < array.length - 1; i++){
      const tempArr = array.slice(i);
      const smallestNum = tempArr.reduce((smallest, num) => {
        return num < smallest ? num : smallest;
      });
      const smallestNumIndex = array.indexOf(smallestNum, i);
      swap(i, smallestNumIndex, array);
    }
    return array;
}
  
function swap(a, b, arr){
    const temp = arr[a];
    arr[a] = arr[b];
    arr[b] = temp;
}