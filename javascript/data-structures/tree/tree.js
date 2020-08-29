'use strict';

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



}

class Node {

  constructor(value, left = null, right = null) {
    this.value = value;
    this.left = left;
    this.right = right;
  }

}


class BinarySearchTree extends BinaryTree {

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
    } else {

      _add(currentNode, newNode);

    }


    function _add(currentNode, newNode) {

      if(newNode.value < currentNode.value) {

        if(currentNode.left === null) {

          currentNode.left = newNode;

        } else {

          _add(currentNode.left, newNode);

        }

      } else if(currentNode.right === null) {

        currentNode.right = newNode;

      } else {

        _add(currentNode.right, newNode);

      }
    }
  }


  contains(value) {
    // returns a boolean indicating whther or not the value is in the tree at least once
    
    if (!this.root) {
      return false;
    }
    
    if (this.root.value === value) {
      return true;
    }
    
    if (value < this.root.value) {
      // GO LEFT
    } else if (value > this.root.value) {
      // GO RIGHT
    }

  }
}

  
  
module.exports = {BinaryTree, BinarySearchTree, Node};

