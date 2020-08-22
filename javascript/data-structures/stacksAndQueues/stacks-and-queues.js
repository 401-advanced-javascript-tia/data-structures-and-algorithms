'use strict';

class Node {

  constructor(value, next = null){
    this.value = value;
    this.next = next;
  }

}

// ----------------- STACK CLASS -------------------

class Stack {

  constructor(){
    this.length = 0;
    this.top = null;
    // this.storage = new Node();
  }


  push(value){
    // adds new node with value to the top of the stack with O(1) time performance

    this.top = new Node(value, this.top);
    this.length++;

  }

  pop(){
    // removes the node from the top of the stack, returns nodes value
    // raise exception when called on empty stack

    let currentNode = this.top;

    if(currentNode){
      let currentVal = currentNode.value;
      currentNode = currentNode.next;
      this.length--;
      return currentVal;
    } else {
      throw new RangeError('Cannot pop off empty stack');
    }
  }

  peek() {
    // return the value of the node located on top of the stack, without removing it from stack
    // raise exception when called on empty stack

    if(this.top){
      return this.top.value;
    } else {
      throw new RangeError('This is an empty stack');
    }
  }

  isEmpty(){
    // return boolean indicating whether or not stack is empty

    return this.length === 0;
  }
}


// ---------------- QUEUE CLASS ---------------------------

class Queue {

  constructor () {
    this.head = null;
    this.length = 0;
  }

  enqueue(value){
    //adds a new node with the value to the back of the queue with O(1) time performance

    const newNode = new Node(value);


    if(!this.head){
      this.head = newNode;
      this.length++;
    } else {
      let front = this.head;

      while(front.next){
        front = front.next;
      }

      front.next = newNode;
      this.length++;
    }

  }


  dequeue(){
    //removes a node from the front of a queue, returns the nodes value
    // raise an expection when called on empty queue
    if(!this.head){
      throw new RangeError('This is an empty queue');
    } else {
      let front = this.head;
      let frontVal = front.value;
      front = front.next;
      this.head = front;
      this.length--;
      return frontVal;
    }
  }

  peek(){
    // returns value of node located at front of queue, without removing it
    // raise an exception when called on an empty queue

    if(!this.head){
      throw new RangeError('Can\'t peek into an empty queue');
    } else {
      return this.head.value;
    }
  }



  isEmpty(){
    //return boolean indicating empty or not
    return this.length === 0;
  }
}


module.exports = {
  Stack,
  Queue,
};
