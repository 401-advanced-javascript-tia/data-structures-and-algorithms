// write function called reverseArray which takes an array as an argument and without utilizing any of the built in methods, return a reversed array

// for loop, starting at the end and doing i-- instead of i++
// arr.length-1

let reverseArray = (arr) => {

  let reversedArr = [];

  for (let i = arr.length-1; i >= 0; i--){
    reversedArr.push(arr[i]);
  }
  return reversedArr;
};

