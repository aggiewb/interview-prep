/*
https://www.freecodecamp.org/learn/coding-interview-prep/algorithms/implement-insertion-sort

The next sorting method we'll look at is insertion sort. 
This method works by building up a sorted array at the beginning of the list. It begins the sorted array with the first element. 
Then it inspects the next element and swaps it backwards into the sorted array until it is in sorted position. 
It continues iterating through the list and swapping new items backwards into the sorted portion until it reaches the end. 
This algorithm has quadratic time complexity in the average and worst cases.

Instructions: Write a function insertionSort which takes an array of integers as input and 
returns an array of these integers in sorted order from least to greatest.
*/

function insertionSort(array) {
    for(let i = 1; i < array.length; i++){
      const current = array[i];
      //index at j is right of i
      let j = i - 1;
      while(j >= 0 && array[j] > current){
        //if the number at array[j] is greater than current
        //assign the index to the right of array[j] to array[j]
        array[j + 1] = array[j];
        j--;
      }
      //assign the number to the right of the last index swapped
      //to the current value
      array[j + 1] = current;
    }
    return array;
}