'use strict';

function quickSort(arr, start, end) {

  if( start < end ){

    // pick a pivot point by getting the return value from partition
    const pivotIndex = partition(arr, start, end);
    //when pivot comes back, it is saying that everything to the left is smaller and everything to the right of that index is larger, not necessarily sorted yet

    // *divide and conquer!*
    // sort the left, moving pivot to the left each time

    quickSort(arr, start, pivotIndex -1);

    // sort the right, moving the pivot to the right each time

    quickSort(arr, pivotIndex + 1, end);

    return arr;

  } else {
    return;
  }

}

// partition's job is for a given array and given search parameters, to make it such that the pivot ends up in the correct spot and let quicksort know where that pivot ended up (represents final index where pivot wound up)
function partition(arr, start, end) {

  let pivot = arr[end];

  let left = start - 1;

  for(let i = start; i < end; i++){

    if( arr[i] <= pivot) {

      // do i need to switch order of swap and left++
      swap(arr, i, left);
      left++;

    }
  }

  swap(arr, end, left + 1);

  return left + 1;

}


function swap (arr, i, left) {

  let temp = arr[i];

  arr[i] = arr[left];

  arr[left] = temp;

}


module.exports = quickSort;
