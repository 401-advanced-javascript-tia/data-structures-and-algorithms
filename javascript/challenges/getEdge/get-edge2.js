

function directFlights(graph, airports) {

  let isPossible = true;
  let cost = 0;

  for(let i=0; i<airports.length-1; i++) {

    const airport = airports[i];

    const destination = airports[i+1];

    const directConnections = graph.getNeighbors(airport);

    let directConnectionFound = false;

    for(let connection of directConnections) {

      if(connection.vertex === destination){
        directConnectionFound = true;
        cost += connection.weight;
        break;
      }

    }

    if(!directConnectionFound) {
      cost = 0;
      isPossible = false;
      break;
    }

    return {
      isPossible,
      cost,
    };

  }
}

module.exports = directFlights;
