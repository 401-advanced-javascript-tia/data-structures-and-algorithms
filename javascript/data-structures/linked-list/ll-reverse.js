'use strict';

// WRITE SOME TESTS FOR THIS!

function reverseList(list) {


  let current = list.head;
  let next, previous = null;

  while(current) {

    next = current.next;
    current.next = previous;
    previous = current;
    current = next;

  }

  list.head = previous;
  // return previous;

}


module.exports = reverseList;
