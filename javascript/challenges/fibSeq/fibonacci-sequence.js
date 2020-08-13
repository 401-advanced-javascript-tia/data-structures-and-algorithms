'use strict';

function fibonacciSeq (int){

  let seqArr = [0, 1];

  for (let i = 2; i < int + 1; i++){

    seqArr.push(seqArr[i - 2] + seqArr[i -1]);

  }

  return seqArr[int];

}


module.exports = fibonacciSeq;
