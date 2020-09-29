'use strict';

const { Queue } = require('../stacksAndQueues/stacks-and-queues.js');

class Node {

  constructor(value) {
    this.value = value;
    this.adjacents = [];
  }
}

class Edge {

  constructor(sourceNode, destinationNode, weight) {
    this.sourceNode = sourceNode;
    this.destinationNode = destinationNode;
    this.weight = weight;
  }
}


class Graph {

  constructor() {

    this.adjacencyList = [];
    this.edges = [];

    // [ { value: , adjacents: []}, { value: , adjacents: []}, { value: , adjacents: []} ]

    // [ { sourceNode: 1, destinationNode: 2, weight: 10 }, { sourceNode: 1, destinationNode: 4, weight: 20 } ]

  }

  addNode(value) {
    // returns the added Node

    const newNode = new Node(value);
    this.adjacencyList.push(newNode);
    return newNode;

  }

  addEdges(node1, node2, weight = null) {
    // adds edge between two nodes
    // includy ability to have weight
    // takes in the two nodes to be connected by the edge (both nodes should already be in the graph)

    node1.adjacents.push(node2.value);
    node2.adjacents.push(node1.value);

    const edge = new Edge(node1.value, node2.value, weight);
    this.edges.push(edge);

  }

  getNodes() {
    //returns all the nodes in the graph as a collection (set, list, similar)

    return this.adjacencyList;

  }

  getNeighbors(node) {
    // takes in given node
    // returns a collection of edges connected to the given node
    // include the weight of the connection in the returned collection

    const edgeCollection = [];

    this.edges.forEach(edge => {

      if(edge.sourceNode === node.value){
        edgeCollection.push(edge);
      }

    });

    return edgeCollection;

  }

  size() {
    //returns the total number of nodes in the graph

    if(this.adjacencyList.length > 0){
      return this.adjacencyList.length;
    } else {
      return null;
    }

  }

  // printList() {
  //   // return list visual in string form
  // }

  breadthFirstTraversal(node) {

    const nodes = new Map();
    const breadthQueue = new Queue();
    const visitedArr = [];

    breadthQueue.enqueue(node);

    while(!breadthQueue.isEmpty()) {

      const front = breadthQueue.dequeue();

      nodes.set(front);
      visitedArr.push(front);

      const children = this.getNeighbors(front);

      if(children) {

        children.forEach(child => {
  
          if(!visitedArr.includes(child)) {
            breadthQueue.enqueue(child);
          }
  
        });

      } else {
        throw new Error('this node has no neighbors');
      }


    }

    return nodes;


  }

  // breadthFirstTraversal
  // !!make sure to mark the root as visited as well!!!
  // keep track of visited nodes in a set, and then check (line 111) to see if child is in visited list. if so, dont pay any attention to it. if not, do the stuff to it

  // ALGORITHM BreadthFirst(vertex)
  //   DECLARE nodes <-- new Set()
  //   DECLARE breadth <-- new Queue()
  //   breadth.Enqueue(vertex)

  //   while (breadth is not empty)
  //       DECLARE front <-- breadth.Dequeue()
  //       nodes.Add(front)

  //       for each child in front.Children
  //           if(child is not visited)
  //               child.Visited <-- true OR create new visited set (set of key value pairs where the value doesnt matter) and check against that ( O(1) search time)
  // or you need to set .visited property back to false
  //               breadth.Enqueue(child)

  //   return nodes;


}




module.exports = Graph;
