'use strict';

const Graph = require('../graphs/graphs.js');


describe('Graph Data Structure Implementation', () => {

  it('should successfully add Node to the graph', () => {

    const graph = new Graph();

    graph.addNode(4);

    expect(graph.getNodes()).toEqual('[{value: 4}, adjacents: []}]')

    // expect(graph.printList()).toEqual('[{ value: 4, adjacents: []}] -> 4');

  });

  it('should successfully add an Edge to the graph', () => {
    
  });

  it('should successfully retrieve a collection of Nodes from the graph', () => {
    
  });

  it('should successfully retrieve neighbors from the graph', () => {

  });

  it('should successfully return neighbors with weight between Nodes', () => {
    
  });

  it('should successfully return size of graph (num of Nodes)', () => {
    
  });

  it('should successfully return graph with only one Node and Edge', () => {
    
  });

  it('should successfully return null if the graph is empty', () => {
    
  });



});


