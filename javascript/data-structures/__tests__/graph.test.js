'use strict';

const Graph = require('../graphs/graphs.js');


describe('Graph Data Structure Implementation', () => {

  it.skip('should successfully add Node to the graph', () => {
    const graph = new Graph();
    graph.addNode(4);
    expect(graph.getNodes()).toEqual([{'adjacents': [], 'value': 4}]);

  });


  it.skip('should successfully add an Edge to the graph', () => {
    const graph = new Graph();
    const node4 = graph.addNode(4);
    const node7 = graph.addNode(7);

    graph.addEdges(node4, node7, 20);

    const edgeCollection = [
      {
        destinationNode: 7,
        sourceNode: 4,
        weight: 20,
      },
    ];

    expect(graph.getNeighbors(node4)).toEqual(edgeCollection);

    

  });


  it.skip('should successfully retrieve a collection of Nodes from the graph', () => {
    const graph = new Graph();
    graph.addNode(4);
    graph.addNode(7);
    graph.addNode(9);

    expect(graph.getNodes()).toEqual([{'adjacents': [], 'value': 4}, {'adjacents': [], 'value': 7}, {'adjacents': [], 'value': 9}]);
    
  });


  it.skip('should successfully return edges with weight between Nodes', () => {
    
    const graph = new Graph();
    const node4 = graph.addNode(4);
    const node7 = graph.addNode(7);
    const node9 = graph.addNode(9);

    graph.addEdges(node4, node7, 20);
    graph.addEdges(node4, node9, 10);

    const edgeCollection = [
      {
        destinationNode: 7,
        sourceNode: 4,
        weight: 20,
      },
      {
        destinationNode: 9,
        sourceNode: 4,
        weight: 10,
      },
    ];

    expect(graph.getNeighbors(node4)).toEqual(edgeCollection);
  });


  it.skip('should successfully return size of graph (num of Nodes)', () => {
    const graph = new Graph();
    graph.addNode(4);
    graph.addNode(7);
    graph.addNode(9);
    expect(graph.size()).toEqual(3);
  });


  it.skip('should successfully return graph with only one Node and Edge', () => {
    
    const graph = new Graph();
    const node4 = graph.addNode(4);

    expect(graph.size()).toEqual(1);
  });


  it.skip('should successfully return graph with only two Nodes and one Edge', () => {
    
    const graph = new Graph();
    const node4 = graph.addNode(4);
    const node7 = graph.addNode(7);
    graph.addEdges(node4, node7);


    const edgeCollection = [
      {
        destinationNode: 7,
        sourceNode: 4,
        weight: null,
      },
    ];

    expect(graph.size()).toEqual(2);
    expect(graph.getNeighbors(node4)).toEqual(edgeCollection);
  });


  it.skip('should successfully return null if the graph is empty', () => {
    const graph = new Graph();
    expect(graph.size()).toEqual(null);
  });

  
});


describe('Breadth First Traversal of a Graph', () => {

  it.skip('should properly return list of nodes from breadth-first traversal', () => {

    const graph = new Graph();
    const node4 = graph.addNode(4);
    const node7 = graph.addNode(7);
    const node9 = graph.addNode(9);

    graph.addEdges(node4, node7, 20);
    graph.addEdges(node4, node9, 10);

    expect(graph.breadthFirstTraversal(node4)).toEqual(node4, node7, node9);

  });

  it.skip('should throw an Error if the input node is an island', () => {







  });





});




