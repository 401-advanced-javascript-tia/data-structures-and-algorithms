'use strict';

const mergeSort = require('../merge-sort2.js');


describe('test suite for merge sort', () => {
  it('should properly merge unsorted arr', () => {

    const unsortedArr = [3, 1, 8, 9, 2, 4, 1];
    const sorted = [1, 1, 2, 3, 4, 8, 9];

    expect(mergeSort(unsortedArr)).toEqual(sorted);
  });

});

