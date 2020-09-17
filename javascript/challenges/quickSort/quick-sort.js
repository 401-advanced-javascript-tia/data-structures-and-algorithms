'use strict';

function quickSort(arr, start, end) {

  if( start < end ){

    // pick a pivot point by getting the return value from partition
    const pivotPosition = partition(arr, start, end);

    // *divide and conquer!*
    // sort the left

    quickSort(arr, start, pivotPosition -1);

    // sort the right

    quickSort(arr, pivotPosition + 1, end);

    return arr;

  } else {
    return;
  }

}

function partition(arr, start, end) {

  let pivot = arr[end];

  let low = start - 1;

  for(let i = start; i < end; i++){

    if( arr[i] <= pivot) {

      swap(arr, i, low);
      low++;

    }
  }

  swap(arr, end, low + 1);

  return low + 1;

}


function swap (arr, i, low) {

  let temp = arr[i];

  arr[i] = arr[low];

  arr[low] = temp;

}


module.exports = quickSort;
