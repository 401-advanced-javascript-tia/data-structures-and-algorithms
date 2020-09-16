'use strict';

let mergeSort = require('../mergeSort/merge-sort.js');


describe('Merge Sort function', () => {


  it('should properly sort an unsorted input array', () => {
    let arr = [8, 4, 23, 42, 16, 15];
    expect(mergeSort(arr)).toEqual([4, 8, 15, 16, 23, 42]);
  });

  it('should return the input array if it is one item long', () => {
    let arr = [8];
    expect(mergeSort(arr)).toEqual([8]);
  });

  it.skip('should properly sort a reverse-sorted input array', () => {
    let arr = [20, 18, 12, 8, 5, -2];
    expect(mergeSort(arr)).toEqual([-2, 5, 8, 12, 18, 20]);
  });

  it.skip('should properly sort an input array with duplicates', () => {
    let arr = [5, 12, 7, 5, 5, 7];
    expect(mergeSort(arr)).toEqual([5, 5, 5, 7, 7, 12]);
  });

  it.skip('should properly sort an input array that is nearly sorted', () => {
    let arr = [2, 3, 5, 7, 13, 11];
    expect(mergeSort(arr)).toEqual([2, 3, 5, 7, 11, 13]);
  });

});
