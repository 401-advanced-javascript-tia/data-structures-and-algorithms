'use strict';

function llPalindrome(list) {

  let arr =[];

  let currentNode = this.head;

  if(currentNode) {
    arr.push(currentNode.value);
  }

  while(currentNode.next) {
    currentNode = currentNode.next;
    arr.push(currentNode.value);
  }

  // now we have an array with all the values in the linked list

  for(let i = 0; i < arr.length/2; i++) {

    if(arr[i] !== arr[arr.length - ( i + 1 ) ] ){

      return false;

    }

    return true;

  }


}

module.exports = llPalindrome;
