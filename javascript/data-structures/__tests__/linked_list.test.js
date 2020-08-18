'use strict';

const LinkedList = require('../linked-list/linked-list.js');

it('should instantiate', () => {
  const ll = new LinkedList();
  expect(ll).toBeDefined();
});

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

describe('toString method', () => {

  it('should return a string of items in list', () => {

    const ll = new LinkedList();
    ll.insert('c');
    ll.insert('b');
    ll.insert('a');
    expect(ll.toString()).toBe('{ a } -> { b } -> { c } -> NULL');

  });

});

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
    expect(ll.head.value).toBe('oranges');
    expect(ll.head.next.value).toBe('kiwi');

  });

});

describe('insertAfter Method', () => {





});





