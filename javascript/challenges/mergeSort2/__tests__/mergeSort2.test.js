'use strict';

const mergeSort = require('../merge-sort2.js');


describe('test suite for merge sort', () => {

  it('should properly merge unsorted arr', () => {

    const unsortedArr = [3, 1, 8, 9, 2, 4, 1];
    const sorted = [1, 1, 2, 3, 4, 8, 9];

    expect(mergeSort(unsortedArr)).toEqual(sorted);
  });

  it('should properly merge array of length 1', () => {

    const unsortedArr = [6];
    const sortedArr = [6];

    expect(mergeSort(unsortedArr)).toEqual(sortedArr);
  });

  it('should properly merge array of values over 9', () => {

    const unsortedArr= [11, 34, 21, 98, 33, 874, 642, 12, 8, 71];
    const sortedArr= [8, 11, 12, 21, 33, 34, 71, 98, 642, 874];
    expect(mergeSort(unsortedArr)).toEqual(sortedArr);
  });

  it('should properly merge already sorted array', () => {

    const unsortedArr = [1, 2, 3, 6, 9, 10, 23, 99, 121, 197];
    const sortedArr = [1, 2, 3, 6, 9, 10, 23, 99, 121, 197];
    expect(mergeSort(unsortedArr)).toEqual(sortedArr);
  });

});

