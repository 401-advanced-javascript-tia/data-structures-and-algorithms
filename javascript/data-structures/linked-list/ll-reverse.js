'use strict';

function reverseList(list) {

  let current = this.head;
  let previous;

  while(current) {

    let next = current.next;
    current.next = previous;
    previous = current;
    current = next;

  }

  return previous;

}


module.exports = reverseList;
