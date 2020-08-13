const binarySearch = require('../arrayBinarySearch/array-binary-search.js');

describe('Binary Search Function', () => {

  test('binarySearch function exists', () => {
    expect(binarySearch).toBeDefined();
  });

  test('binarySearch should return index of number argument', () => {

    let arr = [1, 3, 6, 7, 9];
    let num = 7;
    let result = binarySearch(arr, num);

    expect(result).toStrictEqual(3);

  });

  test('if array does not include number, binarySearch returns -1', () => {

    let arr = [1, 3, 6, 7, 9];
    let num = 8;
    let result = binarySearch(arr, num);

    expect(result).toStrictEqual(-1);

  });

  test('binarySearch will also work on non-numerical values', () => {

    let arr = ['apple', 'bat', 'cat', 'dog', 'eel', 'frog'];
    let word = 'eel';
    let result = binarySearch(arr, word);

    expect(result).toStrictEqual(4);

  });

});

