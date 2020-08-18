'use strict';

function fibonacciSeq (int){

  let seqArr = [0, 1];

  for (let i = 2; i < int + 1; i++){

    seqArr.push(seqArr[i - 2] + seqArr[i -1]);

  }

  return seqArr[int];

}

// function fibonacciSeq (int){

//   let a = 1;
//   let b = 0;

//   let temp;

//   while (int>0) {

//     temp = a;
//     a = a + b;
//     b = temp;
//     int--;
//   }

//   return b;

// }




module.exports = fibonacciSeq;
