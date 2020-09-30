'use strict';

class Edge {

  constructor(vertex, weight) {
    this.vertex = vertex;
    this.weight = weight;
  }

}

class Vertex {

  constructor(value) {
    this.value = value;
  }

}

class Graph {

  constructor() {
    this.adjacencyList = new Map();
  }

  //  {
  //    {value: Seattle}: [{vertex: {value: Portland}, weight: 20}, {}],
  //    {}: [],
  //    {}: [],
  //    {}: [],
  //  }




  addVertex(value) {

    const newVertex = new Vertex(value);

    this.adjacencyList.set(newVertex, []);

  }


  addEdge(startVertex, endVertex, weight=0) {

    const edges = this.adjacencyList.get(startVertex);

    const newEdge = new Edge(endVertex, weight);

    edges.push(newEdge);

  }

  // a more accurate name for this method might be getEdges
  getNeighbors(vertex) {
    return this.adjacencyList.get(vertex);
  }





}