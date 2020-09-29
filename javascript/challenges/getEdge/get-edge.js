'use strict';

// const Graph = require('../../data-structures/graphs/graphs.js');

function directTravel(Graph, cityArr) {

  // accepts built Graph as first parameter, and an array of Nodes with city names as values as second parameter

  let totalCost = 0;

  for( let i = 0; i < cityArr.length - 1; i++) {

    let objArr = Graph.edges.filter(edge => edge.sourceNode === cityArr[i] && edge.destinationNode === cityArr[i + 1]);

    if(objArr.length === 0){
      return 'False $0';
    } else {
      totalCost += objArr[0].weight;
    }

  }

  return `True $${totalCost}`;

}

module.exports = directTravel;
