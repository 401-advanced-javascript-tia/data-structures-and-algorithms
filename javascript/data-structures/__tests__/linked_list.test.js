'use strict';

const LinkedList = require('../linked-list/linked-list.js');

it('should instantiate', () => {
  const ll = new LinkedList();
  expect(ll).toBeDefined();
});


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


it('should return a string of items in list', () => {

  const ll = new LinkedList();
  ll.insert('c');
  ll.insert('b');
  ll.insert('a');
  expect(ll.toString()).toBe('{ a } -> { b } -> { c } -> NULL');

});


// ------------ TESTS FOR APPEND METHOD ----------------

it.skip('should append to empty list', () => {

  const ll = new LinkedList();
  ll.append('apples');
  expect(ll.head.value).toBe('apples');


});

it.skip('should append to NOT empty list', () => {
  const ll = new LinkedList();
  ll.insert('apples');
  ll.insert('bananas');

  ll.append('cucumbers');
  expect(ll.head.value).toBe('bananas');
  expect(ll.head.next.value).toBe('apples');
  expect(ll.head.next.next.value).toBe('cucumbers');
  expect(ll.head.next.next.next).toBe(null);
});



