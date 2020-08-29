'use strict';

const { BinaryTree } = require('../tree/tree.js');
const { BinarySearchTree } = require('../tree/tree.js');
const { Node } = require('../tree/tree.js');


describe('BinaryTree Class', () => {

  it('should be a class', () => {
    expect(BinaryTree).toBeDefined();
  });

  it('should instantiate an empty tree', () => {
    const newTree = new BinaryTree();
    expect(newTree.root).toBe(null);
  });

  it('should instantiate a new tree with a single root node', () => {
    const newTree = new BinaryTree(new Node('redwood'));
    expect(newTree.root.value).toBe('redwood');
  });

  it('should add a left child and a right child to a single root node', () => {
    const cedarNode = new Node('cedar');
    const mapleNode = new Node('maple');
    const birchNode = new Node('birch', mapleNode, cedarNode);
    const newTree = new BinaryTree(birchNode);
    expect(newTree.root.value).toBe('birch');
    expect(newTree.root.left.value).toBe('maple');
    expect(newTree.root.right.value).toBe('cedar');
  });

  describe('preOrder traversal', () => {

    it('should return correct collection from preOrder traversal', () => {
      const birchNode = new Node('birch');
      const beechNode = new Node('beech');
      const alderNode = new Node('alder', birchNode, beechNode);
      const mapleNode = new Node('maple');
      const cedarNode = new Node('cedar', alderNode, mapleNode);
      const newTree = new BinaryTree(cedarNode);
      expect(newTree.root.value).toBe('cedar');
      expect(newTree.root.left.left.value).toBe('birch');
      expect(newTree.preOrder()).toEqual(['cedar', 'alder', 'birch', 'beech', 'maple']);
    });

  });

  describe('inOrder traversal', () => {

    it('should return correct collection from inOrder traversal', () => {
      const birchNode = new Node('birch');
      const beechNode = new Node('beech');
      const alderNode = new Node('alder', birchNode, beechNode);
      const spruceNode = new Node('spruce');
      const mapleNode = new Node('maple', spruceNode);
      const cedarNode = new Node('cedar', alderNode, mapleNode);
      const newTree = new BinaryTree(cedarNode);
      expect(newTree.root.value).toBe('cedar');
      expect(newTree.root.left.right.value).toBe('beech');
      expect(newTree.root.right.left.value).toBe('spruce');
      expect(newTree.inOrder()).toEqual(['birch', 'alder', 'beech', 'cedar', 'spruce', 'maple']);
    });

  });

  describe('postOrder traversal', () => {

    it('should return correct collection from postOrder traversal- words', () => {
      const birchNode = new Node('birch');
      const beechNode = new Node('beech');
      const alderNode = new Node('alder', birchNode, beechNode);
      const spruceNode = new Node('spruce');
      const mapleNode = new Node('maple', spruceNode);
      const cedarNode = new Node('cedar', alderNode, mapleNode);
      const newTree = new BinaryTree(cedarNode);
      expect(newTree.postOrder()).toEqual(['birch', 'beech', 'alder', 'spruce', 'maple', 'cedar']);
    });

    it('should return correct collection from postOrder traversal- numbers', () => {
      const node1 = new Node(1);
      const node2 = new Node(2);
      const node3 = new Node(3, node2, node1);
      const node4 = new Node(4);
      const node5 = new Node(5, node4);
      const node6 = new Node(6, node5, node3);
      const newTree = new BinaryTree(node6);
      expect(newTree.postOrder()).toEqual([4, 5, 2, 1, 3, 6]);
    });

  });


});




// NOT REQUIRED- tests for add and contains


describe('BinarySearchTree Class', () => {

  it('should be a class', () => {
    expect(BinarySearchTree).toBeDefined();
  });

  it('should add node to correct spot in tree', () => {

    const node2 = new Node(2);
    const node12 = new Node(12);
    const node33 = new Node(33);
    const node5 = new Node(5, node2);
    const node15 = new Node(15, node12, node33);
    const node9 = new Node(9, node5, node15);

    const newTree = new BinarySearchTree(node9);

    expect(newTree.preOrder()).toEqual([9, 5, 2, 15, 12, 33]);
    expect(newTree.postOrder()).toEqual([2, 5, 12, 33, 15, 9]);

    newTree.add(1);

    expect(newTree.preOrder()).toEqual([9, 5, 2, 1, 15, 12, 33]);
    expect(newTree.inOrder()).toEqual([1, 2, 5, 9, 12, 15, 33]);
    expect(newTree.postOrder()).toEqual([1, 2, 5, 12, 33, 15, 9]);
  });

  it('should return true if tree includes values', () => {
    const node2 = new Node(2);
    const node12 = new Node(12);
    const node33 = new Node(33);
    const node5 = new Node(5, node2);
    const node15 = new Node(15, node12, node33);
    const node9 = new Node(9, node5, node15);
    const newTree = new BinarySearchTree(node9);
    expect(newTree.inOrder()).toEqual([2, 5, 9, 12, 15, 33]);
    expect(newTree.contains(5)).toBe(true);
    expect(newTree.contains(9)).toBe(true);
    expect(newTree.contains(2)).toBe(true);

  });

  it('should return false if tree does not include value', () => {
    const node2 = new Node(2);
    const node12 = new Node(12);
    const node33 = new Node(33);
    const node5 = new Node(5, node2);
    const node15 = new Node(15, node12, node33);
    const node9 = new Node(9, node5, node15);
    const newTree = new BinarySearchTree(node9);
    expect(newTree.inOrder()).toEqual([2, 5, 9, 12, 15, 33]);
    expect(newTree.contains(22)).toBe(false);
    expect(newTree.contains(22)).toBe(false);

  });

});

