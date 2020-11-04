/*
https://www.freecodecamp.org/learn/coding-interview-prep/data-structures/create-a-linked-list-class

Let's create a linked list class. Every linked list should start out with a few basic properties: a head (the first item in your list) 
and a length (number of items in your list). Sometimes you'll see implementations of linked lists that incorporate a tail for the last 
element of the list, but for now we'll just stick with these two. Whenever we add an element to the linked list, our length property 
should be incremented by one.

We'll want to have a way to add items to our linked list, so the first method we'll want to create is the add method.

If our list is empty, adding an element to our linked list is straightforward enough: we just wrap that element in a Node class, and we 
assign that node to the head of our linked list.

But what if our list already has one or more members? How do we add an element to the list? Recall that each node ina linked list has a 
next property. To add a node to the list, find the last node in the list, and point that last node's next property at our new node. 
(Hint: you know you've reached the end of a linked list when a node's next property is null.)

Write an add method that assigns the first node you push to the linked list to the head; after that, whenever adding a node, every node 
should be referenced by the previous node's next property.

Note: Your list's length should increase by one every time an element is added to the linked list.

https://www.freecodecamp.org/learn/coding-interview-prep/data-structures/remove-elements-from-a-linked-list

The next important method that any implementation of a linked list will need is a remove method. This method should take the element we want 
to remove as an argument, and then search the list to find and remove the node that contains that element.

Whenever we remove a node from a linked list, it's important that we don't accidentally orphan the rest of the list in doing so. Recall that 
every node's next property points to the node that follows it in the list. If we're removing the middle element, say, we'll want to make sure 
that we have a connection from that element's previous node's next property to the middle element's next property (which is the next node in 
the list!)

This might sound really confusing, so let's return to the conga line example so we have a good conceptual model. Picture yourself in a conga line, 
and the person directly in front of you leaves the line. The person who just left the line no longer has her hands on anyone in line--and you no 
longer have your hands on the person that left. You step forward and put your hands on next person you see.

If the element we wish to remove is the head element, we reassign the head to the second node of the linked list.

Write a remove method that takes an element and removes it from the linked list.

Note: The length of the list should decrease by one every time an element is removed from the linked list.

https://www.freecodecamp.org/learn/coding-interview-prep/data-structures/search-within-a-linked-list

We should also be able to find specific elements in our linked list. Traversing through data structures is something you'll want to get a lot of 
practice with! Let's create an indexOf method that takes an element as an argument, and returns that element's index in the linked list. If the 
element is not found in the linked list, return -1.

Let's also implement a method that does the opposite: an elementAt method that takes an index as an argument and returns the element at the given 
index. If no element is found, return undefined.

Write an isEmpty method that checks if the linked list is empty, an indexOf method that returns the index of a given element, and an elementAt 
that returns an element at a given index. 

https://www.freecodecamp.org/learn/coding-interview-prep/data-structures/remove-elements-from-a-linked-list-by-index

Let's write a removeAt method that removes the element at a given index. The method should be called removeAt(index). To remove an element at a 
certain index, we'll need to keep a running count of each node as we move along the linked list.

A common technique used to iterate through the elements of a linked list involves a 'runner', or sentinel, that 'points' at the nodes that your 
code is comparing. In our case, starting at the head of our list, we start with a currentIndex variable that starts at 0. The currentIndex should 
increment by one for each node we pass.

Just like our remove(element) method, which we covered in a previous lesson, we need to be careful not to orphan the rest of our list when we 
remove the node in our removeAt(index) method. We keep our nodes contiguous by making sure that the node that has reference to the removed node has 
a reference to the next node.

Write a removeAt(index) method that removes and returns a node at a given index. The method should return null if the given index is either negative, 
or greater than or equal to the length of the linked list.

Note: Remember to keep count of the currentIndex.
*/

function LinkedList() {
    let length = 0;
    let head = null;
  
    const Node = function(element){
      this.element = element;
      this.next = null;
    };
  
    this.head = function(){
      return head;
    };
  
    this.size = function(){
      return length;
    };
  
    this.add = function(element){
      const node = new Node(element);
      if(head){
        let current = head;
        while(current.next !== null){
          current = current.next;
        }
        current.next = node;
      } else {
        head = node;
      }
      length++;
    };

    this.remove = function(element){
        if(head.element !== element){
            let previous = head;
            while(previous){
                let current = previous.next;
                if(current){
                    if(current.element === element){
                        previous.next = current.next;
                        length--;
                        break;
                    }
                }
                previous = current;
            }
        } else {
          head = head.next;
          length--;
        }
    };

    this.isEmpty = function(){
        return head === null;
    }
    
    this.indexOf = function(element){
        let index = 0;
        if(head.element === element){
          return index;
        } else {
          index++;
          let current = head.next;
          while(current){
            if(current.element === element){
              return index;
            } else {
              current = current.next;
            }
          }
        }
        return -1;
    }
    
    this.elementAt = function(index){
        let currentIndex = 0;
        if(index === currentIndex){
          return head.element;
        } else {
          let current = head.next;
          currentIndex++;
          while(current && currentIndex !== index){
            current = current.next;
            currentIndex++;
          }
          return currentIndex === index ? current.element : undefined;
        }
    }

    this.removeAt = function(index){
        if(index < 0 || index >= length){
          return null;
        }
    
        let currentIndex = 0;
        if(length === 1 && index === 0){
          const elementRemoved = head.element;
          head = null;
          length--;
          return elementRemoved;
        }
    
        let previous = head;
        let current = head.next;
    
        while(current){
          currentIndex++;
          if(currentIndex === index){
            const elementRemoved = current.element;
            previous.next = current.next;
            length--;
            return elementRemoved;
          }
          currentIndex++;
          previous = current;
          current = current.next;
        }
    }
}