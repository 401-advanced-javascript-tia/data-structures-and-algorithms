'use strict';

const directTravel = require('../getEdge/get-edge.js');
const Graph = require('../../data-structures/graphs/graphs.js');

const graph = new Graph();
const seattleNode = graph.addNode('Seattle');
const portlandNode = graph.addNode('Portland');
const denverNode = graph.addNode('Denver');
const boulderNode = graph.addNode('Boulder');


graph.addEdges(seattleNode, portlandNode, 200);
graph.addEdges(portlandNode, denverNode, 300);
graph.addEdges(denverNode, boulderNode, 400);
graph.addEdges(boulderNode, portlandNode, 600);



it('should return true and cost when trip is possible', () => {
  const cityArr = [ seattleNode, portlandNode, denverNode ];
  const returnValue = directTravel(graph, cityArr);
  expect(returnValue).toEqual('True $500');
});

it('should return false and 0 when trip is not possible', () => {
  const cityArr = [ seattleNode, boulderNode];
  const returnValue = directTravel(graph, cityArr);
  expect(returnValue).toEqual('False $0');
});

it('should return false and 0 when first two cities connect, but third does not', () => {
  const cityArr = [ seattleNode, portlandNode, boulderNode];
  const returnValue = directTravel(graph, cityArr);
  expect(returnValue).toEqual('False $0');
});

it('should return false and 0 when city nodes do not exist in graph', () => {

  const newCityNode = { value: 'Boston', adjacents: []};
  const newCityNode2 = { value: 'New York', adjacents: []};

  const cityArr = [ newCityNode, newCityNode2];
  const returnValue = directTravel(graph, cityArr);
  expect(returnValue).toEqual('False $0');
});

it('should return false and 0 when cities exist but do not share edges', () => {
  const cityArr = [ seattleNode, denverNode, boulderNode];
  const returnValue = directTravel(graph, cityArr);
  expect(returnValue).toEqual('False $0');
});



