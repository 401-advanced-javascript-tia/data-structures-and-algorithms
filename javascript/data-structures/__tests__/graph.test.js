'use strict';

const Graph = require('../graphs/graphs.js');


describe('Graph Data Structure Implementation', () => {

  it('should successfully add Node to the graph', () => {
    const graph = new Graph();
    graph.addNode(4);
    expect(graph.getNodes()).toEqual([{'adjacents': [], 'value': 4}]);

  });


  it('should successfully add an Edge to the graph', () => {
    const graph = new Graph();
    const node4 = graph.addNode(4);
    const node7 = graph.addNode(7);

    graph.addEdges(node4, node7, 20);

    const edges = [
      {
        destinationNode: {
          value: 7,
          adjacents: [4],
        },
        sourceNode: {
          value: 4,
          adjacents: [7],
        },
        weight: 20,
      },
    ];

    expect(graph.edges).toEqual(edges);

  });


  it('should successfully retrieve a collection of Nodes from the graph', () => {
    const graph = new Graph();
    graph.addNode(4);
    graph.addNode(7);
    graph.addNode(9);

    expect(graph.getNodes()).toEqual([{'adjacents': [], 'value': 4}, {'adjacents': [], 'value': 7}, {'adjacents': [], 'value': 9}]);
    
  });


  it('should successfully return edges with weight between Nodes', () => {
    
    const graph = new Graph();
    const node4 = graph.addNode(4);
    const node7 = graph.addNode(7);
    const node9 = graph.addNode(9);

    graph.addEdges(node4, node7, 20);
    graph.addEdges(node4, node9, 10);

    const edges = [
      {
        destinationNode: {
          value: 7,
          adjacents: [4],
        },
        sourceNode: {
          value: 4,
          adjacents: [7, 9],
        },
        weight: 20,
      },
      {
        destinationNode: {
          value: 9,
          adjacents: [4],
        },
        sourceNode: {
          value: 4,
          adjacents: [7, 9],
        },
        weight: 10,
      },
    ];

    expect(graph.edges).toEqual(edges);
  });


  it('should successfully return size of graph (num of Nodes)', () => {
    const graph = new Graph();
    graph.addNode(4);
    graph.addNode(7);
    graph.addNode(9);
    expect(graph.size()).toEqual(3);
  });


  it('should successfully return graph with only one Node and Edge', () => {
    
    const graph = new Graph();
    const node4 = graph.addNode(4);

    expect(graph.size()).toEqual(1);
  });


  it('should successfully return graph with only two Nodes and one Edge', () => {

    const graph = new Graph();
    const node4 = graph.addNode(4);
    const node7 = graph.addNode(7);
    graph.addEdges(node4, node7);


    const edges = [
      {
        destinationNode: {
          value: 7,
          adjacents: [4],
        },
        sourceNode: {
          value: 4,
          adjacents: [7],
        },
        weight: null,
      },
    ];

    expect(graph.size()).toEqual(2);
    expect(graph.edges).toEqual(edges);
  });


  it('should successfully return null if the graph is empty', () => {
    const graph = new Graph();
    expect(graph.size()).toEqual(null);
  });


});


describe('Breadth First Traversal of a Graph', () => {

  it('should properly return list of nodes from breadth-first traversal', () => {

    const graph = new Graph();
    const node4 = graph.addNode(4);
    const node7 = graph.addNode(7);
    const node9 = graph.addNode(9);

    graph.addEdges(node4, node7, 20);
    graph.addEdges(node4, node9, 10);

    // Set {{"adjacents": [7, 9], "value": 4}, {"adjacents": [4], "value": 7}, {"adjacents": [4], "value": 9}}

    expect(graph.breadthFirstTraversal(node4).size).toEqual(3);

  });

  it('should return single Node if Node is an island', () => {

    const graph = new Graph();
    const node4 = graph.addNode(4);

    expect(graph.breadthFirstTraversal(node4).size).toEqual(1);

  });





});




