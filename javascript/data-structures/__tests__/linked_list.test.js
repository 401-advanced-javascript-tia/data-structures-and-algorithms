'use strict';

const LinkedList = require('../linked-list/linked-list.js');
const zipLists = require('../../challenges/ll_zip/ll-zip.js');

it('should instantiate', () => {
  const ll = new LinkedList();
  expect(ll).toBeDefined();
});


//--------------------------------------------------- INSERT

describe('insert method', () => {

  it('should add to empty list', () => {

    const ll = new LinkedList();
    ll.insert('apples');
    expect(ll.head.value).toBe('apples');

  });

  it('should add to NOT empty list', () => {

    const ll = new LinkedList();
    ll.insert('apples');
    ll.insert('bananas');
    expect(ll.head.value).toBe('bananas');
    expect(ll.head.next.value).toBe('apples');

  });

  it('should properly add multiple items to list', () => {

    const ll = new LinkedList();
    ll.insert('bits');
    ll.insert('bobs');
    ll.insert('knick');
    ll.insert('knacks');

    expect(ll.head.value).toBe('knacks');
    expect(ll.head.next.value).toBe('knick');
    expect(ll.head.next.next.value).toBe('bobs');
    expect(ll.head.next.next.next.value).toBe('bits');

  });

});


//--------------------------------------------------- INCLUDES

describe('includes method', () => {

  it('should point to the head as first node in list', () => {

    const ll = new LinkedList();
    ll.insert('carrots');
    ll.insert('lettuce');
    expect(ll.head.value).toBe('lettuce');

  });

  it('should return true if value in list', () => {

    const ll = new LinkedList();
    ll.insert('cherries');
    ll.insert('oranges');
    expect(ll.head.value).toBe('oranges');
    expect(ll.head.next.value).toBe('cherries');

    expect(ll.includes('oranges')).toBe(true);
    expect(ll.includes('cherries')).toBe(true);

  });

  it('should return false if value is not in list', () => {

    const ll = new LinkedList();
    ll.insert('cherries');
    ll.insert('oranges');
    expect(ll.head.value).toBe('oranges');
    expect(ll.head.next.value).toBe('cherries');

    expect(ll.includes('kiwi')).toBe(false);
    expect(ll.includes('lemons')).toBe(false);

  });

});


//--------------------------------------------------- TO STRING

describe('toString method', () => {

  it('should return a string of items in list', () => {

    const ll = new LinkedList();
    ll.insert('c');
    ll.insert('b');
    ll.insert('a');
    expect(ll.toString()).toBe('{ a } -> { b } -> { c } -> NULL');

  });

});

//--------------------------------------------------- APPEND


describe('append method', () => {

  it('should append to empty list', () => {

    const ll = new LinkedList();
    ll.append('apples');
    expect(ll.head.value).toBe('apples');

  });

  it('should append to NOT empty list', () => {

    const ll = new LinkedList();
    ll.insert('apples');
    ll.insert('bananas');

    ll.append('cucumbers');
    expect(ll.head.value).toBe('bananas');
    expect(ll.head.next.value).toBe('apples');
    expect(ll.head.next.next.value).toBe('cucumbers');
    expect(ll.head.next.next.next).toBe(null);

  });

});


//--------------------------------------------------- INSERT BEFORE

describe('insertBefore Method', () => {

  it('should insert as the head if the list is empty', () => {

    const ll = new LinkedList();
    ll.insertBefore('apples', 'bananas');
    expect(ll.head.value).toBe('bananas');

  });

  it('should insertBefore if there is only one item in list', () => {

    const ll = new LinkedList();
    ll.insert('only item in list');
    ll.insertBefore('only item in list', 'new item in list');
    expect(ll.head.value).toBe('new item in list');
    expect(ll.head.next.value).toBe('only item in list');
    expect(ll.head.next.next).toBe(null);
  });

  it('should find the value passed in and insertBefore', () => {

    const ll = new LinkedList();
    ll.insert('apples');
    ll.insert('bananas');
    ll.insert('oranges');
    ll.insertBefore('bananas', 'kiwi');
    expect(ll.toString()).toBe('{ oranges } -> { kiwi } -> { bananas } -> { apples } -> NULL');
    expect(ll.head.value).toBe('oranges');
    expect(ll.head.next.value).toBe('kiwi');

  });

  it('should throw Exception if the value passed in doesn\'t exist', () => {
    const ll = new LinkedList();
    ll.insert('apples');
    ll.insert('bananas');

    let insertAttempt = () => {
      ll.insertBefore('kiwis', 'test insert');
    };

    let error = 'Exception';

    // expect(() => ll.kthFromEnd(1)).toThrowError('Exception, your value is equal to the list length.');

    expect(insertAttempt).toThrowError(error);
  });

});


//--------------------------------------------------- INSERT AFTER

describe('insertAfter Method', () => {

  it('should insert into an empty list', () => {

    const ll = new LinkedList();
    ll.insertAfter('thing', 'thing to insert into empty list');
    expect(ll.head.value).toBe('thing to insert into empty list');

  });

  it('should insert after the value that\'s passed in if list is one item', () => {

    const ll = new LinkedList();
    ll.insert('apples');
    ll.insertAfter('apples', 'oranges');
    expect(ll.head.value).toBe('apples');
    expect(ll.head.next.value).toBe('oranges');

  });

  it('should insert after value if list is multiple items', () => {

    const ll = new LinkedList();
    ll.insert('bananas');
    ll.insert('kiwis');
    ll.insert('cucumbers');
    ll.insertAfter('kiwis', 'oranges');
    expect(ll.toString()).toBe('{ cucumbers } -> { kiwis } -> { oranges } -> { bananas } -> NULL');

  });

});


//---------------------------------------------------KTH FROM END

describe('kth from end method', () => {

  it('should throw Error where k is greater than the length of the linked list', () => {
    const ll = new LinkedList();
    ll.insert('test');
    expect(() => ll.kthFromEnd(3)).toThrowError('Exception, your value is longer than the list length.');
  });

  it('should throw Error where k and list length are the same', () => {
    const ll = new LinkedList();
    ll.insert('test');
    ll.insert('test2');
    ll.insert('test3');
    expect(() => ll.kthFromEnd(3)).toThrowError('Exception, your value is equal to the list length.');
  });

  it('should throw Error where k is not a positive integer', () => {
    const ll = new LinkedList();
    ll.insert('kiwis');
    expect(() => ll.kthFromEnd(-1)).toThrowError('Exception, try an integer greater than 0.');
  });

  it('should throw Error where linked list is of a size 1', () => {
    const ll = new LinkedList();
    ll.insert('stuff');
    expect(() => ll.kthFromEnd(1)).toThrowError('Exception, your value is equal to the list length.');
  });

  it('sunny day - should return value where k is in middle of list', () => {
    const ll = new LinkedList();
    ll.insert('apples');
    ll.insert('bananas');
    ll.insert('oranges');
    ll.insert('kiwis');
    expect(ll.kthFromEnd(0)).toBe('apples');
    expect(ll.kthFromEnd(1)).toBe('bananas');
    expect(ll.kthFromEnd(2)).toBe('oranges');
    expect(ll.kthFromEnd(3)).toBe('kiwis');
    expect(() => ll.kthFromEnd(4)).toThrowError('Exception');
  });

});


//--------------------------------------------------- ZIPPED LIST

describe('zip two lists function', () => {

  it('should zip lists', () => {

    const list1 = new LinkedList();
    const list2 = new LinkedList();

    list1.insert(2);
    list1.insert(3);
    list1.insert(1);

    list2.insert(4);
    list2.insert(9);
    list2.insert(5);

    const zipped = zipLists(list1, list2);
    expect(zipped.head.value).toBe(1);
    expect(zipped.toString()).toBe('{ 1 } -> { 5 } -> { 3 } -> { 9 } -> { 2 } -> { 4 } -> NULL');


  });


  it('should zip top longer lists', () => {

    const list1 = new LinkedList();
    const list2 = new LinkedList();

    list1.insert(12);
    list1.insert(2);
    list1.insert(3);
    list1.insert(1);

    list2.insert(4);
    list2.insert(9);
    list2.insert(5);

    const zipped = zipLists(list1, list2);
    expect(zipped.toString()).toBe('{ 1 } -> { 5 } -> { 3 } -> { 9 } -> { 2 } -> { 4 } -> { 12 } -> NULL');

  });

  it('should zip bottom longer lists', () => {

    const list1 = new LinkedList();
    const list2 = new LinkedList();

    list1.insert(2);
    list1.insert(3);
    list1.insert(1);

    list2.insert(4);
    list2.insert(4);
    list2.insert(9);
    list2.insert(5);

    const zipped = zipLists(list1, list2);
    expect(zipped.toString()).toBe('{ 1 } -> { 5 } -> { 3 } -> { 9 } -> { 2 } -> { 4 } -> { 4 } -> NULL');


  });



});



