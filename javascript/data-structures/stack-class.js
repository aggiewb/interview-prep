/*
https://www.freecodecamp.org/learn/coding-interview-prep/data-structures/create-a-stack-class

In the last section, we talked about what a stack is and how we can use an array to represent a stack. 
In this section, we will be creating our own stack class. Although you can use arrays to create stacks, 
sometimes it is best to limit the amount of control we have with our stacks. Apart from the push and pop method, 
stacks have other useful methods. Let's add a peek, isEmpty, and clear method to our stack class.

Write a push method that pushes an element to the top of the stack, a pop method that removes and 
returns the element on the top of the stack, a peek method that looks at the top element in the stack, 
an isEmpty method that checks if the stack is empty, and a clear method that removes all elements from the stack. 
Normally stacks don't have this, but we've added a print helper method that console logs the collection.
*/

function Stack() {
    let collection = [];
    this.print = function() {
      console.log(collection);
    };
    this.push = function(item){
      collection[collection.length - 1] = item;
    }
    this.pop = function(){
      const lastIndex = collection.length - 1;
      const topItem = collection[lastIndex];
      collection.splice(lastIndex);
      return topItem;
    }
    this.isEmpty = function(){
      if(!collection.length){
        return true;
      }
      return false;
    }
    this.peek = function(){
      return collection[collection.length - 1];
    }
    this.clear = function(){
      collection = [];
      return collection;
    }
}