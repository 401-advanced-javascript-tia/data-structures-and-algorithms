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

    // SIGNATURE: takes in a key which is (probably) a string, return the value from the table that corresponds to that key, that value could be any data type, it would be whatever type it was when it was added (which is called "type any")

    const index = this.hash(key);

    const itemsInBucket = this.buckets[index];

    if(itemsInBucket === undefined) {
      return null;
    } else {

      for(let item of itemsInBucket) {

        if(item[0] === key){
          return item[1];
        }

      }

      return null;

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

      keyHash += (key.charCodeAt(i) * 599);

    }

    const finalHash = Math.floor(keyHash % this.buckets.length);

    return finalHash;

  }


}


module.exports = Hashtable;
