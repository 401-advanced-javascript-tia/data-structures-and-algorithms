'use strict';

const Graph = require('../graphs/graphs.js');


describe('Graph Data Structure Implementation', () => {

  it('should successfully add Node to the graph', () => {
    const graph = new Graph();
    graph.addNode(4);
    
    expect(graph.getNodes()).toEqual([{'adjacents': [], 'value': 4}]);

  });

  it.skip('should successfully add an Edge to the graph', () => {

    

  });

  it('should successfully retrieve a collection of Nodes from the graph', () => {
    const graph = new Graph();
    graph.addNode(4);
    graph.addNode(7);
    graph.addNode(9);

    expect(graph.getNodes()).toEqual([{'adjacents': [], 'value': 4}, {'adjacents': [], 'value': 7}, {'adjacents': [], 'value': 9}]);
    
  });

  it.skip('should successfully retrieve edges from the graph', () => {

  });

  it.skip('should successfully return edges with weight between Nodes', () => {
    
  });

  it('should successfully return size of graph (num of Nodes)', () => {
    const graph = new Graph();
    graph.addNode(4);
    graph.addNode(7);
    graph.addNode(9);
    expect(graph.size()).toEqual(3);
  });

  it.skip('should successfully return graph with only one Node and Edge', () => {
    
  });

  it('should successfully return null if the graph is empty', () => {
    const graph = new Graph();
    expect(graph.size()).toEqual(null);
  });



});


