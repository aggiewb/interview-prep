/*
https://www.freecodecamp.org/learn/coding-interview-prep/data-structures/create-a-doubly-linked-list

All of the linked lists we've created so far are singly linked lists. Here, we'll create a doubly linked list. As the name implies, nodes 
in a doubly linked list have references to the next and previous node in the list.

This allows us to traverse the list in both directions but it also requires more memory to be used because every node must contain an 
additional reference to the previous node in the list.

We've provided a Node object and started our DoublyLinkedList. Let's add two methods to our doubly linked list called add and remove. The add 
method should add the given element to the list while the remove method should remove all occurrences of a given element in the list.

Be careful to handle any possible edge cases when writing these methods, such as deletions for the first or last element. 
Also, removing any item on an empty list should return null.
*/ 

var Node = function(data, prev) {
    this.data = data;
    this.prev = prev;
    this.next = null;
  };
  var DoublyLinkedList = function() {
    this.head = null;
    this.tail = null;
    
    this.add = function(element){
      if(!this.head){
        const node = new Node(element, null);
        this.head = node;
      } else if(!this.tail){
        const node = new Node(element, this.head);
        this.head.next = node;
        this.tail = node;
      } else {
        const node = new Node(element, this.tail);
        this.tail.next = node;
        this.tail = node;
      }
    }
  
    this.remove = function(element){
      if(!this.head){
        return null;
      }
  
      if(this.tail && this.tail.data === element){
        this.tail = this.tail.prev;
        this.tail.next = null;
        console.log("if " + element)
      }
  
      if(this.head.data === element){
        if(this.head.next){
          console.log("if " + element)
          this.head = this.head.next;
          this.head.prev = null;
        } else {
          console.log("if else " + element)
          this.head = null;
        }
      } 
  
      let current = this.head;
      while(current){
        if(current.data === element){
          if(current.next){
            console.log("while " + element)
            const prevNode = current.prev;
            const nextNode = current.next;
            prevNode.next = nextNode;
            nextNode.prev = prevNode;
          } else {
              console.log("while " + element)
              current = this.tail.prev;
              current.next = null;
          }
        }
        current = current.next;
      }
    }
};
  
//TODO: troubleshoot remove method as freecodecamp's tests are not adequate, and need to remove multiple nodes correctly
//   let list = new DoublyLinkedList();
//   list.add(2);
//   list.add(2);
//   // list.add(1);
//   // list.add(2);
//   // list.add(3);
//   // list.add(2);
//   list.remove(2);
//   console.log(list)
  