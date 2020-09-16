'use strict';

function mergeSort(arr) {

  const arrLength = arr.length;

  if( arrLength === 1 ) {
    return arr;
  }

  if( arrLength > 1 ) {

    const mid = Math.floor(arrLength/2);
    const left = arr.slice(0, mid);
    const right = arr.slice(mid, arrLength);

    mergeSort(left);

    mergeSort(right);

    merge(left, right, arr);

    return arr;
  }
  
}


function merge (left, right, arr) {

  let i = 0;
  let j = 0;
  let k = 0;

  while( i < left.length && j < right.length ) {

    if( left[i] <= right[j] ) {
      arr[k] = left[i];
      i++;
    } else {
      arr[k] = right[j];
      j++;
    }

    k++;

  }

  if( i === left.length ) {

    //set remaining entries in arr to remaining values in right

  } else {

    //set remaining entries in arr to remaining values in left

  }
}

module.exports = mergeSort;


