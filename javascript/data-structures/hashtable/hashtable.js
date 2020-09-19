'use strict';

// SIGNATURE: defines number and types of input, and data type of return value


class Hashtable {

  constructor(size = 1024) {
    this.buckets = new Array(size);
  }

  add(key, value) {

    // SIGNATURE: takes in a key and value, doesn't return anything

    const index = this.hash(key);

    const contentsOfBucket = this.buckets[index];

    if ( contentsOfBucket === undefined ){
      this.buckets[index] = [ [key, value] ];
    } else {
      this.buckets[index].push( [key, value] );
    }

  }


  get(key) {

    // SIGNATURE: takes in a key which is (probably) a string, return the value from the table that corresponds to that key, that value could be any data type, it would be whatever type it was when it was added ("type any")

    const index = this.hash(key);

    const itemsInBucket = this.buckets[index];

    if(itemsInBucket === undefined) {
      return null;
    } else {
      //should have an array of 

      // for(let item of itemsInBucket) {
      //   if(item[0] === key){
      //     return item[1];
      //   } else {
      //     return null;
      //   }
      // }


      itemsInBucket.forEach(array => {
        if(array[0] === key){
          return array[1];
        } else {
          return null;
        }
      });

    }

  }



  contains(key) {

    // SIGNATURE: takes in one key which is (probably) a string, returns boolean
    // boolean return indicates if key exists in table aready

    const index = this.hash(key);

    if(this.buckets[index] !== undefined){
      return true;
    } else {
      return false;
    }

  }


  hash(key) {

    // SIGNATURE: takes in a key (likely a string), returns index in collection which will be an integer (index in range)

    // requirements hash:
    // - integer that represents the index in the array
    // - within range of size of container (number of buckets)
    // - should be stable, consistent, always come back the same
    // - we should strive for it to be unique


    // --------- AN OPTION --------------
    // let sum = 0;

    // for(let char of key) {
    //   console.log(char);
    //   const val = char.charCodeAt(0);
    //   sum += val;
    // }

    // const primedUp = sum * 599;
    // const index = primedUp % this.buckets.length;

    // return index;

    // ----------------------------------


    let keyHash = 0;

    for(let i = 0 ; i < key.length; i++) {


      keyHash += key.charCodeAt(i);

      keyHash = keyHash * i;

      return keyHash;

    }

    keyHash = Math.floor(keyHash % this.buckets.length);

    return keyHash;

  }





}


module.exports = Hashtable;
