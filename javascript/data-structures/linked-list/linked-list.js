'use strict';

class Node {

  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}


class LinkedList {

  constructor() {
    this.head = null;
  }

  insert(value) {
    //insert any value and put it in the front of the list

    this.head = new Node(value, this.head);
  }

  includes(value) {

    let currentNode = this.head;

    while(currentNode !== null) {

      if(currentNode.value === value) {
        return true;
      }
      currentNode = currentNode.next;
    }

    return false;

  }

  toString() {

    let currentNode = this.head;
    let resultStr = '';

    while(currentNode !== null) {
      resultStr += `{ ${currentNode.value} } -> `;
      currentNode = currentNode.next;
    }

    return `${resultStr}NULL`;

  }

  append(value){
    // add to the tail (aka end) of the list
    const newNode = new Node(value);

    if (!this.head) {
      this.head = new Node(value);
      return;
    }
    // while loop looking for a node with a next of null
    let currentNode = this.head;
    while(currentNode.next) {
      // while currentNode.next is truthy which means it !== null
      currentNode = currentNode.next;
    }
    //we now know that currentNode is a node, in fact its the last node
    currentNode.next = newNode;
  }


  insertBefore(value, newVal){

    let newNode = new Node(newVal, null);
    let currentNode = this.head;

    if(currentNode === null){
      this.head = newNode;
      return;
    }

    
    if (currentNode.value === value){
      // newNode.next = currentNode;
      // this.head = newNode;
      this.insert(newVal);
      return;
    }

    while(currentNode.next) {

      if(currentNode.next.value === value){
        newNode.next = currentNode.next;
        currentNode.next = newNode;
        return;
      }
      currentNode = currentNode.next;

    }
    throw new Error('Exception');
  }



  insertAfter(value, newVal){

    let newNode = new Node(newVal, null);
    let currentNode = this.head;

    if(currentNode === null){
      this.head = newNode;
    } else {

      if(currentNode.value === value){
        newNode.next = currentNode.next;
        currentNode.next = newNode;
      }

      while(currentNode.next !== null){

        try {
          if(currentNode.value === value) {
            newNode.next = currentNode.next;
            currentNode.next = newNode;
            break;
          }
          currentNode = currentNode.next;
        } catch(err) {
          throw new Error('Exception');
        }
      }
    }
  }


  kthFromEnd(k) {

    let arr = [];
    let currentNode = this.head;

    if (currentNode) {
      arr.push(currentNode.value);
    }

    while (currentNode.next) {
      currentNode = currentNode.next;
      arr.push(currentNode.value);
    }

    if (k > arr.length) {
      throw new Error('Exception, your value is longer than the list length.');
    } else if (k === arr.length) {
      throw new Error('Exception, your value is equal to the list length.');
    } else if (k < 0) {
      throw new Error('Exception, try an integer greater than 0.');
    } else {
      const indexOfValue = arr.length - (k + 1);
      return arr[indexOfValue];
    }

  }


}



module.exports = LinkedList;
