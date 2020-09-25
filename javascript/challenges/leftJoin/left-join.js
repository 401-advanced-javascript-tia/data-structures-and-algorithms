'use strict';

function leftJoin(hashtable1, hashtable2) {

  // // alternate solutions from class if the hashtable inputs are POJOSs

  // const output = [];

  // for(let key in hashtable1 ){
  //   const entry = [key, hashtable1[key], 'null'];

  //   if(key in hashtable2){
  //     entry[2] = hashtable2[key];
  //   }

  //   output.push(entry);
  // }

  // // ---------------------------------------

  // const output = [];

  // for(let word in hashtable1) {

  //   const word1 = hashtable1[word];

  //   let word2 = 'null';

  //   if(word in hashtable2) {
  //     word2 = hashtable2[word];
  //   }

  //   const entry = [word, word1, word2];

  //   output.push(entry);
  // }


  // -------- MY ORIGINAL SOLUTION BELOW

  const resultArr = [];

  hashtable1.buckets.forEach(outerBucket => {

    outerBucket.forEach(innerBucket => {

      if(innerBucket) {
        resultArr.push([innerBucket[0], innerBucket[1]]);
      } else {
        return;
      }

    });


  });

  for(let i = 0; i <resultArr.length; i++) {

    let keyToCheck = resultArr[i][0];

    if(hashtable2.get(keyToCheck)) {

      const secondValToAddOntoResultsArr = hashtable2.get(keyToCheck);

      resultArr[i].push(secondValToAddOntoResultsArr);

    } else {

      resultArr[i].push(null);

    }

  }

  return resultArr;


}

module.exports = leftJoin;

