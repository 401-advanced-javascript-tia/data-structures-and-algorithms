'use strict';

const {Stack} = require('../../data-structures/stacksAndQueues/stacks-and-queues.js');

class PseudoQueue {

  constructor () {
    this.stack1 = new Stack();
    this.stack2 = new Stack();
  }

  enqueue(value){
    //adds a new node with the value to the back of the queue with O(1) time performance

    this.stack1.push(value);

  }


  dequeue(){

    if(this.stack1.length === 0){
      throw new RangeError('Cannot dequeue from empty stack.');
    } else {
      while(this.stack1.length > 0){
        let poppedItem = this.stack1.pop();
        this.stack2.push(poppedItem);
      }
    }

    const valOfPopped = this.stack2.pop();

    while(this.stack2.length > 0){
      let itemPopped = this.stack2.pop();
      this.stack1.push(itemPopped);
    }

    return valOfPopped;
  }

}


module.exports = PseudoQueue;
