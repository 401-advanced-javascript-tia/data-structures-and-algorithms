'use strict';

const {Stack} = require('../../data-structures/stacksAndQueues/stacks-and-queues.js');

class PseudoQueue {

  constructor () {
    this.stack1 = new Stack();
    this.stack2 = new Stack();
    this.length = 0;
  }

  enqueue(value){
    this.stack1.push(value);
    this.length++;
  }


  dequeue(){

    if(this.stack1.isEmpty()){
      throw new RangeError('Cannot dequeue from empty stack.');
    } else {
      while(!this.stack1.isEmpty()){
        let poppedItem = this.stack1.pop();
        this.length--;
        this.stack2.push(poppedItem);
      }
    }

    const valOfPopped = this.stack2.pop();

    while(!this.stack2.isEmpty()){
      let itemPopped = this.stack2.pop();
      this.stack1.push(itemPopped);
      this.length++;
    }

    return valOfPopped;
  }

}


module.exports = PseudoQueue;
