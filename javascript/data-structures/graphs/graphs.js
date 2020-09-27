'use strict';

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


}




module.exports = Graph;
