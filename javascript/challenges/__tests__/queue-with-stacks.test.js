'use strict';

const PseudoQueue = require('../queuesWithStacks/queue-with-stacks.js');

describe('PseudoQueue class', () => {

  it('should be a class', () => {
    expect(PseudoQueue).toBeDefined();
  });

  it('should enqueue to empty stack', () => {

    const pseudoqueue = new PseudoQueue();
    pseudoqueue.enqueue('thing1');
    expect(pseudoqueue.length).toBe(1);
  });






});