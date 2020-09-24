' use strict';

const treeIntersection = require('../treeIntersection/tree-intersection.js');
const { Node } = require('../../data-structures/tree/tree.js');
const { BinaryTree } = require('../../data-structures/tree/tree.js');

describe('Binary Tree Intersection', () => {

  it('should return shared values between two trees', () => {
    const node5 = new Node(5);
    const node2 = new Node(2);
    const node3 = new Node(3, node2, node5);
    const node4 = new Node(4);
    const node15 = new Node(15, node4);
    const node6 = new Node(6, node15, node3);
    const tree1 = new BinaryTree(node6);

    const secondnode5 = new Node(5);
    const secondnode2 = new Node(2);
    const secondnode7 = new Node(7, secondnode2, secondnode5);
    const secondnode4 = new Node(4);
    const secondnode33 = new Node(33, secondnode4);
    const secondnode9 = new Node(9, secondnode7, secondnode33);
    const tree2 = new BinaryTree(secondnode9);

    expect(treeIntersection(tree1, tree2)).toEqual([2, 5, 4]);

  });

  it('should return shared values between two trees', () => {
    const node350 = new Node(350);
    const node200 = new Node(200);
    const node600 = new Node(600, node200, node350);
    const node15 = new Node(15);
    const node160 = new Node(160);
    const node100 = new Node(100, node15, node160);
    const node42 = new Node(42, node100, node600);
    const tree1 = new BinaryTree(node42);

    const secondnode950 = new Node(950);
    const secondnode200 = new Node(200);
    const secondnode800 = new Node(800, secondnode200, secondnode950);
    const secondnode25 = new Node(25);
    const secondnode160 = new Node(160);
    const secondnode100 = new Node(100, secondnode25, secondnode160);
    const secondnode42 = new Node(42, secondnode100, secondnode800);
    const tree2 = new BinaryTree(secondnode42);

    expect(treeIntersection(tree1, tree2)).toEqual([42, 100, 160, 200]);

  });

  it('should return shared values between two trees when all values shared', () => {
    const node350 = new Node(350);
    const node200 = new Node(200);
    const node600 = new Node(600, node200, node350);
    const node15 = new Node(15);
    const node160 = new Node(160);
    const node100 = new Node(100, node15, node160);
    const node42 = new Node(42, node100, node600);
    const tree1 = new BinaryTree(node42);

    const secondnode350 = new Node(350);
    const secondnode200 = new Node(200);
    const secondnode600 = new Node(600, secondnode200, secondnode350);
    const secondnode15 = new Node(15);
    const secondnode160 = new Node(160);
    const secondnode100 = new Node(100, secondnode15, secondnode160);
    const secondnode42 = new Node(42, secondnode100, secondnode600);
    const tree2 = new BinaryTree(secondnode42);


    expect(treeIntersection(tree1, tree2)).toEqual([42, 100, 15, 160, 600, 200, 350]);

  });

  it('should throw Error when no shared values', () => {
    const node350 = new Node(350);
    const node200 = new Node(200);
    const node600 = new Node(600, node200, node350);
    const node15 = new Node(15);
    const node160 = new Node(160);
    const node100 = new Node(100, node15, node160);
    const node42 = new Node(42, node100, node600);
    const tree1 = new BinaryTree(node42);

    const secondnode3500 = new Node(3500);
    const secondnode2000 = new Node(2000);
    const secondnode6000 = new Node(6000, secondnode2000, secondnode3500);
    const secondnode150 = new Node(150);
    const secondnode1600 = new Node(1600);
    const secondnode1000 = new Node(1000, secondnode150, secondnode1600);
    const secondnode420 = new Node(420, secondnode1000, secondnode6000);
    const tree2 = new BinaryTree(secondnode420);

    expect(() => treeIntersection(tree1, tree2)).toThrowError('No shared values found');
  });

  it('should return shared values when only one value shared', () => {

    const node350 = new Node(350);
    const node200 = new Node(200);
    const node600 = new Node(600, node200, node350);
    const node15 = new Node(15);
    const node160 = new Node(160);
    const node100 = new Node(100, node15, node160);
    const node42 = new Node(42, node100, node600);
    const tree1 = new BinaryTree(node42);

    const secondnode350 = new Node(350);
    const secondnode2000 = new Node(2000);
    const secondnode6000 = new Node(6000, secondnode2000, secondnode350);
    const secondnode150 = new Node(150);
    const secondnode1600 = new Node(1600);
    const secondnode1000 = new Node(1000, secondnode150, secondnode1600);
    const secondnode420 = new Node(420, secondnode1000, secondnode6000);
    const tree2 = new BinaryTree(secondnode420);

    expect(treeIntersection(tree1, tree2)).toEqual([350]);

  });

  it('should respond properly when one tree is empty', () => {

    const node350 = new Node(350);
    const node200 = new Node(200);
    const node600 = new Node(600, node200, node350);
    const node15 = new Node(15);
    const node160 = new Node(160);
    const node100 = new Node(100, node15, node160);
    const node42 = new Node(42, node100, node600);
    const tree1 = new BinaryTree(node42);

    const tree2 = new BinaryTree();

    expect(() => treeIntersection(tree1, tree2)).toThrowError('No shared values found');

  });


  it('should respond properly when there are multiple same shared value', () => {

    const node350 = new Node(350);
    const node3502 = new Node(350);
    const node600 = new Node(600, node3502, node350);
    const node15 = new Node(15);
    const node160 = new Node(160);
    const node100 = new Node(100, node15, node160);
    const node42 = new Node(42, node100, node600);
    const tree1 = new BinaryTree(node42);

    const secondnode350 = new Node(350);
    const secondnode3502 = new Node(350);
    const secondnode6000 = new Node(6000, secondnode3502, secondnode350);
    const secondnode420 = new Node(42);
    const secondnode1600 = new Node(1600);
    const secondnode422 = new Node(42, secondnode420, secondnode1600);
    const secondnode42 = new Node(42, secondnode422, secondnode6000);
    const tree2 = new BinaryTree(secondnode42);

    expect(treeIntersection(tree1, tree2)).toEqual([42, 350]);

  });


});
