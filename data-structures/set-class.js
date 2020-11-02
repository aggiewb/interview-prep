/*
https://www.freecodecamp.org/learn/coding-interview-prep/data-structures/create-a-set-class

In this exercise we are going to create a class named Set to emulate an abstract data structure called "set". 
A set is like an array, but it cannot contain duplicate values. 
The typical use for a set is to simply check for the presence of an item. We can see how the ES6 Set object works in the example below:

const set1 = new Set([1, 2, 3, 5, 5, 2, 0]);
console.log(set1);
// output: {1, 2, 3, 5, 0}
console.log(set1.has(1));
// output: true
console.log(set1.has(6));
// output: false

First, we will create an add method that adds a value to our set collection as long as the value does not already exist in the set. 
Then we will create a remove method that removes a value from the set collection if it already exists. And finally, 
we will create a size method that returns the number of elements inside the set collection.

Create an add method that adds a unique value to the set collection and returns true if the value was successfully added and false otherwise.

Create a remove method that accepts a value and checks if it exists in the set. If it does, then this method should remove it from the set collection, 
and return true. Otherwise, it should return false. Create a size method that returns the size of the set collection.

https://www.freecodecamp.org/learn/coding-interview-prep/data-structures/perform-a-union-on-two-sets

In this exercise we are going to perform a union on two sets of data. We will create a method on our Set data structure called union. 
This method should take another Set as an argument and return the union of the two sets, excluding any duplicate values.

For example, if setA = ['a','b','c'] and setB = ['a','b','d','e'], then the union of setA and setB is: setA.union(setB) = ['a', 'b', 'c', 'd', 'e'].

https://www.freecodecamp.org/learn/coding-interview-prep/data-structures/perform-an-intersection-on-two-sets-of-data

In this exercise we are going to perform an intersection on 2 sets of data. We will create a method on our Set data structure called intersection. 
An intersection of sets represents all values that are common to two or more sets. This method should take another Set as an argument and 
return the intersection of the two sets.

For example, if setA = ['a','b','c'] and setB = ['a','b','d','e'], then the intersection of setA and setB is: setA.intersection(setB) = ['a', 'b'].
*/

class Set {
    constructor() {
      // Dictionary will hold the items of our set
      this.dictionary = {};
      this.length = 0;
    }
  
    // This method will check for the presence of an element and return true or false
    has(element) {
      return this.dictionary[element] !== undefined;
    }
  
    // This method will return all the values in the set
    values() {
      return Object.keys(this.dictionary);
    }
  
    add(item){
      if(!this.has(item)){
        this.dictionary[item] = item;
        this.length++;
        return true; 
      }
      return false;
    }
  
    remove(item){
      if(this.has(item)){
        delete this.dictionary[item];
        this.length--;
        return true; 
      }
      return false;
    }
  
    size(){
      return this.length;
    }

    union(dictionaryToAdd){
      const newSet = new Set();
      this.values().forEach(value => {
        newSet.add(value);
      });
      dictionaryToAdd.values().forEach(value => {
        newSet.add(value);
      });
      return newSet;
    }

    intersection(dictionaryToIntersect){
      const newSet = new Set();
      if(dictionaryToIntersect.size() > this.size()){
        dictionaryToIntersect.values().forEach(value => {
          if(this.has(value)){
            newSet.add(value);
          }
        });
      } else {
        this.values().forEach(value => {
          if(dictionaryToIntersect.has(value)){
            newSet.add(value);
          }
        });
      }
      return newSet;
    }
}