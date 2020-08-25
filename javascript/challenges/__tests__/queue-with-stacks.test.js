'use strict';

const PseudoQueue = require('../queuesWithStacks/queue-with-stacks.js');

describe('PseudoQueue class', () => {

  it('should be a class', () => {
    expect(PseudoQueue).toBeDefined();
  });

  it('should enqueue to empty stack', () => {

    const pqueue = new PseudoQueue();
    pqueue.enqueue('thing1');
    expect(pqueue.length).toBe(1);
  });

  it('should enqueue multiple items', () => {
    const pqueue = new PseudoQueue();
    pqueue.enqueue('thing1');
    pqueue.enqueue('thing2');
    pqueue.enqueue('thing3');
    expect(pqueue.length).toBe(3);
  });

  it('should properly dequeue', () => {
    const pqueue = new PseudoQueue();
    pqueue.enqueue('thing1');
    pqueue.enqueue('thing2');
    pqueue.enqueue('thing3');
    expect(pqueue.length).toBe(3);

    expect(pqueue.dequeue()).toBe('thing3');
    expect(pqueue.length).toBe(2);

  });

  it('should throw error when dequeueing from already empty stack', () => {
    const pqueue = new PseudoQueue();
    expect(() => pqueue.dequeue()).toThrow(RangeError);
  });

  it('should enqueue and dequeue multiple times', () => {
    const pqueue = new PseudoQueue();
    pqueue.enqueue('thing1');
    expect(pqueue.dequeue()).toBe('thing1');
    pqueue.enqueue('thing2');
    expect(pqueue.dequeue()).toBe('thing2');
    pqueue.enqueue('thing3');
    expect(pqueue.dequeue()).toBe('thing3');
    expect(() => pqueue.dequeue()).toThrow(RangeError);
  });

});
