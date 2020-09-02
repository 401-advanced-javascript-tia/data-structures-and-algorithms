'use strict';

// Write a function called FizzBuzzTree which takes a k-ary tree as an argument.
// Without utilizing any of the built-in methods available to your language, determine whether or not the value of each node is divisible by 3, 5 or both. Create a new tree with the values modified as follows:
// If the value is divisible by 3, replace the value with “Fizz”
// If the value is divisible by 5, replace the value with “Buzz”
// If the value is divisible by 3 and 5, replace the value with “FizzBuzz”
// If the value is not divisible by 3 or 5, simply turn the number into a String.
// Return the modified tree


function fizzBuzzTree(tree) {

  // traverse tree
  // check if value % 3 === 0, if yes currentNode.value = fizz
  // if value % 5 ===0, currentNode.value = buzz
  // if value % 3 && % 5, currentNode.value = fizzbuzz
  // if none, value.toString()

  if(!tree) {
    throw new Error('Tree is empty');
  }

  function _fizzBuzz(root) {

    if(!root) {
      return;
    }

    if (root.value % 3 === 0 && root.value % 5 === 0) {
      root.value = 'FizzBuzz';
    } else if(root.value % 3 === 0){
      root.value = 'Fizz';
    } else if (root.value % 5 === 0) {
      root.value = 'Buzz';
    } else {
      root.value = root.value.toString();
    }

    _fizzBuzz(root.left);
    _fizzBuzz(root.right);

  }

  _fizzBuzz(tree.root);

}

module.exports = fizzBuzzTree;
