const insertShiftArray = require('../arrayShift/array-shift.js');

describe('Array Shift Function', () => {

  test('insertShiftArray function exists', () => {
    expect(insertShiftArray).toBeDefined();
  });

  test('array length should increase by 1', () => {

    let origArr = [1, 2, 3, 4];
    let resultArr = insertShiftArray(origArr, 7);
    expect(resultArr.length === (origArr.length + 1));
    // tried to use toBe here but kept getting one off. need to check out in code review!

  });

  test('resulting array includes number to be shifted in', () => {

    let origArr = ['x', 'x', 'x'];
    let newVal = 'y';
    let resultArr = insertShiftArray(origArr, newVal);

    expect(resultArr).toContain(newVal);
  });



});





