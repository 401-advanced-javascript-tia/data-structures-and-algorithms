'use strict';

class Node {

  constructor(value, next = null) {
    this. value = value;
    this.next = next;
  }
}


class LinkedList {

  constructor() {
    this.head = null;
  }

  //this could be called insertNewHead
  insert(value) {
    //insert any value and put it in the front of the lsit

    this.head = new Node(value, this.head);
    // used to be const node =  , but because the only thing to do in here is assign it to the head and pass on the value, we can just do that right off

    // node.next = this.head;

    // this.head = node;

    // return undefined;
    //when you don't return anything from something, by default javascript returns undefined;
  }


  includes(value) {

    let currentNode = this.head;

    while(currentNode !== null) {

      if(currentNode === value) {
        return true;
      } else {
        currentNode = currentNode.next;
      }
    }
    return false;
  }

  toString() {

    let currentNode = this.head;

    let resultArr = [];

    while(currentNode !== null) {

      resultArr.push({currentNode});

      currentNode = currentNode.next;

    }

    let arrToStr = resultArr.join(' -> ');

    return arrToStr;
  }

  //  ----------------- APPEND METHOD -----------------
  // append(value){
  //   // add to the tail (aka end) of the list
  //   const newNode = new Node(value);
  //   if (!this.head) {
  //     this.head = new Node(value);
  //     return;
  //   }
  //   // while loop looking for a node with a next of null
  //   let currentNode = this.head;
  //   while(currentNode.next) {
  //     // while currentNode.next is truthy which means it !== null
  //     currentNode = currentNode.next;
  //   }
  //   //we now know that currentNode is a node, in fact its the last node
  //   currentNode.next = newNode;
  // }
  // ---------------------------------------------------

  // another thing you can do is make an array with the values that are in the linked list. traverse the list like in append() above, push each value to an array


}

module.exports = LinkedList;
