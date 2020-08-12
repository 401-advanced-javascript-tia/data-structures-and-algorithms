// function called insertShiftArray that takes in an array and the value to be added. Without using built in methods, return an array with the new value added as the middle index


function insertShiftArray(arr, newNum) {

  let indexNum = (arr.length) / 2;

  arr.splice(indexNum, 0, newNum);
  return arr;
}


module.exports = insertShiftArray;
