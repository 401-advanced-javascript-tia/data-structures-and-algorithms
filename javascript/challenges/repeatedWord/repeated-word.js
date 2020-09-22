'use strict';

// const Hashtable = require('../../data-structures/hashtable/hashtable.js');

function firstRepeatedWord(str) {

  // shoutout Cas Ibrahim for the non-hashtable solution!
  // POST-LECTURE UPDATE: pojos use built in hastable so, hashtable solution indeed! : )

  let strNoPunct = str.replace(/[\d\.\/,!\-_&\+]/g, '');
  let strNoDblSpaces = strNoPunct.replace(/\s{2,}/g, ' ');
  let strFinal = strNoDblSpaces.toLowerCase();
  let arr = strFinal.split(' ');

  let obj = {};

  for (let i = 0; i < arr.length; i++) {

    if (obj[arr[i]]) {
      return arr[i];
    }

    obj[arr[i]] = 1;
  }

  throw new Error('No repeating words found');

}



module.exports = firstRepeatedWord;
