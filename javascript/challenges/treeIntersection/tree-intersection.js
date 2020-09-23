'use strict';

const Hashtable = require('../../data-structures/hashtable/hashtable.js');


function treeIntersection(tree1, tree2) {

  const table = new Hashtable();


  function _traverseFirstTree (root){

    if (root === null) {
      return;
    }

    table.add(root.value.toString(), '1');

    _traverseFirstTree(root.left);
    _traverseFirstTree(root.right);

  }


  _traverseFirstTree(tree1.root);

  console.log('table after first traverse:', table);


  const resultsArr = [];


  function _traverseSecondTree(root) {

    if (root === null) {
      return;
    }

    if (table.get(root.value.toString())) {

      if (!resultsArr.includes(root.value)) {
        resultsArr.push(root.value);
      }

    }

    _traverseSecondTree(root.left);
    _traverseSecondTree(root.right);


  }

  _traverseSecondTree(tree2.root);

  // can use reduce here instead to make sure there are no repeated values in the results array?



  if(resultsArr.length >= 1) {
    return resultsArr;
  } else {
    throw new Error('No shared values found');
  }

}

module.exports = treeIntersection;



