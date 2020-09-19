'use strict';

const Hashtable = require('../hashtable/hashtable.js');




it.skip('should add in correct spot', () => {
  const table = new Hashtable();
  table.add('tree', 'beech');

  const index = table.hash('tree');

  const value = table.buckets[index];

  // WE CAN USE GET FOR THIS

  expect(value).toBe('beech');

});



it.skip('should correctly hash a key to an in-range value', () => {
  const table = new Hashtable(256);

  const index = table.hash('foobar');
  console.log('index:', index);

  // expect(index < 256 && index >= 0 );


  // console.log(table.buckets.length);
  // const table2 = new Hashtable(256);
  // console.log(table2.buckets.length);

  // expect(table.hash('foobar'))
});



it.skip('should retreive the correct value stored, based on a key', () => {

  const table = new Hashtable();
  table.add('tree', 'beech');

  const value = table.get('tree');

  expect(value).toBe('beech');
});



it.skip('should successfully return null for a key that doesn\'t exist in hashtable', () => {


});



it('should successfully handle a collision within the hashtable', () => {


});

it('should retrieve a vlue from a bucket in the table that has a collision', () => {


});

