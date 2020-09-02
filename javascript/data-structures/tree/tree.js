'use strict';

const { Queue } = require("../stacksAndQueues/stacks-and-queues");

// const Queue = require('../stacksAndQueues/stacks-and-queues.js');

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

  inOrder() {

    const arr = [];

    function _inOrder(root) {

      if(!root){
        return;
      }

      _inOrder(root.left);
      arr.push(root.value);
      _inOrder(root.right);
    }

    _inOrder(this.root);
    return arr;
  }

  postOrder() {

    const arr = [];

    function _postOrder(root) {

      if(!root) {
        return;
      }

      _postOrder(root.left);
      _postOrder(root.right);
      arr.push(root.value);

    }

    _postOrder(this.root);
    return arr;
  }

  findMaxValue() {

    if(!this.root) {
      throw new Error('Binary tree is empty');
    }

    // create temporary holding variable for the max value
    // go left through the tree and copmare to max variable
    // go right through tree and compare to max variable
    // call findMaxValue for both left and right sides

    let tempMax = 0;

    function _findMaxVal(root){

      if(root) {
        let tempRootVal = root.value;

        let tempLeftMax = _findMaxVal(root.left);
        let tempRightMax = _findMaxVal(root.right);

        if(tempLeftMax > tempRightMax){
          tempMax = tempLeftMax;
        } else {
          tempMax = tempRightMax;
        }

        if(tempRootVal > tempMax) {
          tempMax = tempRootVal;
        }

      }

      return tempMax;

    }

    _findMaxVal(this.root);
    return tempMax;

  }

  breadthFirstTraversal(binaryTree) {

    // traverse using breadth first and return resulting list of values

    if(!binaryTree) {
      throw new Error('Tree is empty');
    }

    const newArr = [];

    const queue = new Queue();

    queue.enqueue(binaryTree.root);

    while(queue.head){

      let tempNode = queue.dequeue();

      newArr.push(tempNode.value);

      _rootCheck(tempNode);

    }

    function _rootCheck(root) {

      if(root.left) {
        queue.enqueue(root.left);
      }

      if(root.right) {
        queue.enqueue(root.right);
      } else {
        return;
      }
    }

    return newArr;


  }





}

class Node {

  constructor(value, left = null, right = null) {
    this.value = value;
    this.left = left;
    this.right = right;
  }

}


class BinarySearchTree extends BinaryTree {

  // constructor(root = null) {
  //   super(root);
  // }

  add(value) {
    //adds a new Node with that value in the correct location in the search tree

    // create a Node with the value so we have something to put somewhere
    // first check if the tree is empty, if so just add the Node
    //if not, we need to enter tree and check if root.value is > or < than value passed in
    // if smaller, go left and check again
    // if bigger, go right and check again
    // go until the node we're at has no left or right, and put it there
    // at the node we're on, we'll make it the left or right

    let newNode = new Node(value);
    let currentNode = this.root;

    if(!currentNode) {
      currentNode = newNode;
      return;
    } else {
      _add(currentNode, newNode);
    }

    function _add(currentNode, newNode) {

      while(currentNode.value !== newNode.value) {

        if(currentNode.value < newNode.value) {

          if(!currentNode.right) {

            currentNode.right = newNode;

          } else {

            currentNode = currentNode.right;

          }

        } else {

          if(!currentNode.left) {

            currentNode.left = newNode;

          } else {

            currentNode = currentNode.left;

          }
        }
      }
    }
  }


  contains(value) {
    // returns a boolean indicating whther or not the value is in the tree at least once

    let currentNode = this.root;

    if (!currentNode) {
      return false;
    }

    if (currentNode.value === value) {
      return true;
    }


    while(currentNode) {

      if(currentNode.value === value) {
        return true;
      }

      // https://stackoverflow.com/questions/37292620/how-to-find-value-is-present-in-binary-tree-or-not
      currentNode = value < currentNode.value ? currentNode.left : currentNode.right;
    }

    return false;

  }
}


module.exports = {BinaryTree, BinarySearchTree, Node};

