'use strict';
// (testing in ../../data-structures/__tests__/linked_list.test.js)

function zipList(list1, list2){

  let currentNode1 = list1.head;
  let currentNode2 = list2.head;

  while(currentNode1 && currentNode2) {

    let formerNext1 = currentNode1.next;
    currentNode1.next = currentNode2;

    let formerNext2 = currentNode2.next;

    if(formerNext1){
      currentNode2.next = formerNext1;
    } else {
      break;
    }

    currentNode1 = formerNext1;
    currentNode2 = formerNext2;

  }

  return list1;

}

module.exports = zipList;
