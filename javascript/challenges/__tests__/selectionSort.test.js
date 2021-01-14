'use strict';

const selectionSort = require('../../challenges/selectionSort/selection-sort.js');

describe('Selection Sort', () => {

  it('should properly sort an array of 5 items', () => {

    let testArr = [1, 6, 3, 0, 4];

    expect(selectionSort(testArr)).toEqual([0, 1, 3, 4, 6]);

  });

  it('should properly sort an array of 1 item', () => {

    let testArr = [1];
    let sorted = [1];

    expect(selectionSort(testArr)).toEqual(sorted);

  });

  it('should sort arrays with double-digit values', () => {

    let testArr = [1, 62, 31, 0, 49];
    let sorted = [0, 1, 31, 49, 62];

    expect(selectionSort(testArr)).toEqual(sorted);

  });

});

