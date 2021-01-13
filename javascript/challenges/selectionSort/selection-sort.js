// given : [ 1, 3, 2, 5, 0 ]
// return : [ 0, 1, 2, 3, 5 ]

// ALGORITHM
// build a sorted side starting from the left, index 0
// set min to index 0
// compare everything afterwards to min
// if we find something that is smaller, set it as the new min
// once we've gone through whole list, swap min with selection

// after each pass the search area gets smaller (since its to the right)


// PSEUDOCODE

//  for(let i = 0; i < arr.length -1; i++)
//      let min = i

//      for(let j = i+1; j < arr.length; j++)
//          if( arr[j] < arr[i] )
//              min = j

//      let temp = arr[min]
//      arr[min] = arr[i]
//      arr[i] = temp

function selectionSort(arr){

  for (let i = 0; i < (arr.length - 1); i++){

    let min = i;

    for (let j = i + 1; j < arr.length ; j++) {

      if( arr[j] < arr[min] ){
        min = j;
      }
    }

    let temp = arr[min];
    arr[min] = arr[i];
    arr[i] = temp;
  }

  return arr;

}


module.exports = selectionSort;


