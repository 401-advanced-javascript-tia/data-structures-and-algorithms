'use strict';

// https://www.freecodecamp.org/news/8-essential-graph-algorithms-in-javascript/


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

  // ADJANCENCY LIST

  constructor() {

    this.adjanceyList = [];
    this.edges = [];

    // [ { value: , adjacents: []}, { value: , adjacents: []}, { value: , adjacents: []} ]

    // [ { sourceNode: 1, destinationNode: 2, weight: 10 }, { sourceNode: 1, destinationNode: 4, weight: 20 } ]

  }

  addNode(value) {
    // returns the added Node

    const newNode = new Node(value);
    this.adjanceyList.push(newNode);
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

    return this.adjanceyList;

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

    if(this.adjanceyList.length > 0){
      return this.adjanceyList.length;
    } else {
      return null;
    }

  }

  // printList() {
  //   // return list visual in string form
  // }


}


















// class Node {

//   // Node just has a list of all its connections
//   constructor(value) {
//     this.value = value;
//     this.adjacents = [];

//   }
// }

// class Edge {

//   // needs to keep track of 2 things: initator of connection and the final connection

//   constructor(nodeA, nodeB, weight) {
//     this.nodeA = nodeA;
//     this.nodeB = nodeB;
//     this.weight = weight;
//   }
// }


// class Graph {

//   // ADJANCENCY LIST

//   constructor() {
//     // this.adjacencyList = new Hashtable();
//     // this.numVertices = numVertices;

//     this.edges = {};
//     this.nodes = [];

//   }

//   // data structures public methods should not talk about Nodes or require them
//   addNode(value) {

//     // returns the added Node

//     const newNode = new Node(value);
//     this.nodes.push(newNode);

//     // if(this.adjacencyList.contains(value)){
//     //   return this.adjacencyList.get(value);
//     // } else {
//     //   const newNode = new Node(value);
//     //   this.adjacencyList.add(value, newNode);
//     //   return newNode;
//     // }

//   }

//   addEdges(node1, node2, weight = null) {
//     // includy ability to have weight
//     // takes in the two nodes to be connected by the edge (both nodes should alreay be in the graph)
//     // takes in the 2 things that need to connect, in their string form

//     const edge = new Edge(node1, node2, weight);
//     this.edges[node1].push(edge);
//     this.edges[node2].push(edge);
//     // return this.edges;

//   }

//   getNodes() {
//     //returns all the nodes in the graph as a collection (set, list, similar)

//     // return this.adjacencyList;

//     return this.nodes;

//   }

//   getNeighbors(Node) {
//     // takes in given node
//     // returns a collection of edges connected to the given node
//     // include the weight of the connection in the returned collection

//     return Node.adjacents;
//   }

//   size() {
//     //returns the total number of nodes in the graph
//     if(this.nodes.length > 0) {
//       return this.nodes.length;
//     } else {
//       throw new Error('There are no Nodes in this graph yet.');
//     }
//   }

//   printList() {
//     // return list visual in string form

//     let graphDisplay = '';



//     this.nodes.forEach(node => {

//       let edges = 'none';

//       if(this.edges[node]){
//         edges = this.edges[node];
//       }

//       graphDisplay += `${node} -> ${edges}`;

//     });

//     return graphDisplay;
//   }




// }






module.exports = Graph;
