/*
https://www.freecodecamp.org/learn/coding-interview-prep/algorithms/implement-bubble-sort

Here we will see bubble sort. 
The bubble sort method starts at the beginning of an unsorted array and 'bubbles up' unsorted values towards the end, 
iterating through the array until it is completely sorted. It does this by comparing adjacent items and swapping them 
if they are out of order. The method continues looping through the array until no swaps occur at which point the array is sorted.

This method requires multiple iterations through the array and for average and worst cases has quadratic time complexity (O(N^2)). 
While simple, it is usually impractical in most situations.

Instructions: Write a function bubbleSort which takes an array of integers as input and 
returns an array of these integers in sorted order from least to greatest.
*/ 

function bubbleSort(array) {
    let arraySwitchIterations = array.length - 1;
    //0 is falsy
    while(arraySwitchIterations){
      for(let i = 0; i < arraySwitchIterations; i++){
        const first = i;
        const second = i + 1;
        if(array[first] > array[second]){
          swap(first, second, array);
        }
      }
      arraySwitchIterations--;
    }
    return array;
}
  
function swap(a, b, array){
    const temp = array[a];
    array[a] = array[b];
    array[b] = temp;
}