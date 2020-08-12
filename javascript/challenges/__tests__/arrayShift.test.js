const shiftArray = require('../arrayShift/array-shift.js');

test('shiftArray exists', () => {
  expect(shiftArray).toBeDefined();
});

test('array length should increase by 1', () => {

  const origArr = ['a', 'a', 'a'];
  const resultArr = shiftArray(origArr, 'y');
  expect(resultArr.length).toBe(origArr.length + 1);
  
});

