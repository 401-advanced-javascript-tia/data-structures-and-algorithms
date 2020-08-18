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


    // if (!this.head){
    //   return;
    // }

    // if(this.head.value === value){
    //   this.insert(newVal);
    //   return;
    // }

    // let currentNode = this.head;

    // while(current.next) {

    //   if (current.next.value !== value) {
    //     currentNode = currentNode.next;
    //   } else{
    //     current.next = new Node(newVal, current.next);
    //   }
    // }


    // DEMO CODE above, orig code below:

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

      try{
        if(currentNode.next.value === value){
          newNode.next = currentNode.next;
          currentNode.next = newNode;
          return;
        }
        currentNode = currentNode.next;
      } catch (err) {
        throw new Error('Exception');
      }
    }

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


}







// another thing you can do is make an array with the values that are in the linked list. traverse the list like in append() above, push each value to an array



module.exports = LinkedList;
