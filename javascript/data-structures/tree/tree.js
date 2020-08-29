'use strict';


// const output = [];

// function preOrder(root) {
//   // add root's value to an array
//   // check for null

//   if(!root) {
//     return;
//     // throw new Error('No root');
//   }

//   output.push(root.value);

//   preOrder(root.left);
//   // this involves one extra function call but it works because it root is null it will just return out with the if statement above
//   preOrder(root.right);


//   // if(root.left) {
//   //   preOrder(root.left);
//   // }

//   // if(root.right) {
//   //   preOrder(root.right);
//   // }

// }

class BinaryTree {

  constructor( root = null) {
    this.root = root;
  }

  preOrder() {

    const arr = [];

    function _preOrder(root) {
    // inner helper function is prefixed with an underscore. differentiates them, shows theyre related but gives dif name. youll also see inner function named walk() or something like that
      if(!root) {
        return;
      }

      arr.push(root.value);
      _preOrder(root.left);
      _preOrder(root.right);

    }

    _preOrder(this.root);
    return arr;

  }
}

class Node {

  constructor(value, left = null, right = null) {
    this.value = value;
    this.left = left;
    this.right = right;
  }

}

const bananaNode = new Node('bananas');
const cucumberNode = new Node('cucumbers');
const appleNode = new Node('apples', bananaNode, cucumberNode);

const tree = new BinaryTree(appleNode);
const resultsPreOrder = tree.preOrder();
const resultsInOrder = tree.inOrder();
const resultsPostOrder = tree.postOrder();

console.log(resultsPreOrder);
console.log(resultsInOrder);
console.log(resultsPostOrder);




