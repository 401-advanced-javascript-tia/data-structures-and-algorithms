'use strict';

let insertionSort = require('../insertionSort/insertion-sort.js');


describe('Insertion Sort function', () => {


  it('should properly sort an unsorted input array', () => {
    let arr = [8, 4, 23, 42, 16, 15];
    expect(insertionSort(arr)).toEqual([4, 8, 15, 16, 23, 42]);
  });


  it('should properly sort an array that includes duplicate numbers', () => {
    let arr = [8, 4, 15, 42, 8, 15];
    expect(insertionSort(arr)).toEqual([4, 8, 8, 15, 15, 42]);
  });


  it('should properly sort a reverse-sorted input array', () => {
    let arr = [42, 23, 16, 15, 8, 4];
    expect(insertionSort(arr)).toEqual([4, 8, 15, 16, 23, 42]);
  });


});
