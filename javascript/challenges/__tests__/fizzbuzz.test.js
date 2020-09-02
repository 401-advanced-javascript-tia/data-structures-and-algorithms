' use strict';

const fizzBuzzTree = require('../fizzBuzzTree/fizz-buzz-tree.js');
const { Node } = require('../../data-structures/tree/tree.js');
const { BinaryTree } = require('../../data-structures/tree/tree.js');

describe('Fizz Buzz Tree', () => {

  it('should throw error when list is empty', () => {
    expect(() => fizzBuzzTree()).toThrowError('Tree is empty');
  });

  it('should return proper fizz buzz tree with tree with one node', () => {
    const node5 = new Node(5);
    const newTree = new BinaryTree(node5);
    fizzBuzzTree(newTree);
    expect(newTree.inOrder()).toEqual(['Buzz']);
  });

  it('should return proper fizz buzz tree with multiple nodes', () => {
    const node5 = new Node(5);
    const node2 = new Node(2);
    const node3 = new Node(3, node2, node5);
    const node4 = new Node(4);
    const node15 = new Node(15, node4);
    const node6 = new Node(6, node15, node3);
    const newTree = new BinaryTree(node6);
    fizzBuzzTree(newTree);
    expect(newTree.postOrder()).toEqual(['4', 'FizzBuzz', '2', 'Buzz', 'Fizz', 'Fizz']);
  });


});

