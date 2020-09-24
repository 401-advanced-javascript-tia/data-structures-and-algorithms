'use strict';

function leftJoin(hashtable1, hashtable2) {

  // go through whole hashtable 1, send key and value pairs to a result array
  // console.log('hashtable1:', hashtable1);


  const resultArr = [];

  hashtable1.buckets.forEach(outerBucket => {

    // console.log('+++outerBucket in forEach:', outerBucket);

    outerBucket.forEach(innerBucket => {
      // console.log('+++innerBucket in forEach:', innerBucket);

      if(innerBucket) {
        resultArr.push([innerBucket[0], innerBucket[1]]);
      } else {
        return;
      }

    });



  });


  // console.log('resultArr after first table:', resultArr);


  // now leftJointResultArr should have all the key/value pairs in individual arrays

  // go through second hashtable, see if the results array includes the key, and if so then push the value to that array in the total results array


  for(let i = 0; i <resultArr.length; i++) {

    // console.log('resultArr[i] :', resultArr[i]);

    let keyToCheck = resultArr[i][0];

    if(hashtable2.get(keyToCheck)) {

      const secondValToAddOntoResultsArr = hashtable2.get(keyToCheck);

      // console.log('secondValToAddOntoResultsArr', secondValToAddOntoResultsArr);


      resultArr[i].push(secondValToAddOntoResultsArr);

    } else {

      resultArr[i].push(null);

    }

    console.log('resultArr in for loop:', resultArr);

  }

  return resultArr;


}

module.exports = leftJoin;

