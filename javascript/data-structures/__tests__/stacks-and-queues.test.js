'use strict';

const {Stack} = require('../stacksAndQueues/stacks-and-queues.js');
const {Queue} = require('../stacksAndQueues/stacks-and-queues.js');

describe('Stack class', () => {

  
  it('should be a class', () => {
    expect(Stack).toBeDefined();
  });


  it('should push onto a stack', () => {
    const stack = new Stack();
    stack.push('kombucha');
    expect(stack.length).toBe(1);
    expect(stack.isEmpty()).toBeFalsy();
  });


  it('should push multiple values onto a stack', () => {
    const stack = new Stack();
    stack.push('kombucha');
    stack.push('kimchi');
    stack.push('jun');
    expect(stack.length).toBe(3);
    expect(stack.isEmpty()).toBeFalsy();
  });


  it('should pop off the stack', () => {
    const stack = new Stack();
    stack.push('kombucha');
    stack.push('kimchi');
    expect(stack.pop()).toBe('kimchi');
    expect(stack.length).toBe(1);
  });


  it('should empty a stack after multiple pops', () => {
    const stack = new Stack();
    stack.push('kombucha');
    stack.push('kimchi');
    stack.pop();
    stack.pop();
    expect(stack.length).toBe(0);
    expect(stack.isEmpty()).toBe(true);
  });


  it('should peek the top item in the stack', () => {
    const stack = new Stack();
    stack.push('kombucha');
    stack.push('kimchi');
    expect(stack.peek()).toBe('kimchi');
  });


  it('can instantiate an empty stack', () => {
    const stack = new Stack();
    expect(stack.length).toBe(0);
    expect(stack.isEmpty()).toBe(true);
  });


  it('will raise exception when pop() is called on empty stack', () => {
    const stack = new Stack();
    expect(stack.length).toBe(0);
    expect(() => stack.pop()).toThrow(RangeError);
  });


  it('will raise exception when peek() is called on empty stack', () => {
    const stack = new Stack();
    expect(stack.length).toBe(0);
    expect(() => stack.peek()).toThrow(RangeError);
  });

});

// ------------------- QUEUE TESTS --------------------------

describe('Queue class', () => {


  it('should be a class', () => {
    expect(Queue).toBeDefined();
  });


  it('should enqueue into a queue', () => {
    const queue = new Queue();
    queue.enqueue('9');
    expect(queue.length).toBe(1);
  });


  it('should enqueue multiple values into a queue', () => {
    const queue = new Queue();
    queue.enqueue('beans');
    queue.enqueue('asparagus');
    queue.enqueue('carrots');
    expect(queue.length).toBe(3);
    expect(queue.head.value).toBe('beans');
    expect(queue.isEmpty()).toBeFalsy();
  });


  it('should dequeue out of a queue the expected value', () => {

    const queue = new Queue();
    queue.enqueue('beans');
    queue.enqueue('asparagus');
    queue.enqueue('carrots');
    queue.dequeue();
    expect(queue.length).toBe(2);
  });


  it('can peek into a queue, seeing the expected values', () => {
    const queue = new Queue();
    queue.enqueue('beans');
    queue.enqueue('asparagus');
    expect(queue.peek()).toBe('beans');
  });


  it('can empty a queue after multiple dequeues', () => {
    const queue = new Queue();
    queue.enqueue('beans');
    queue.enqueue('asparagus');
    queue.enqueue('carrots');
    queue.dequeue();
    queue.dequeue();
    queue.dequeue();
    expect(queue.length).toBe(0);
    expect(queue.head).toBe(null);
  });


  it('can instantiate an empty queue', () => {
    const queue = new Queue();
    expect(queue.length).toBeDefined();
    expect(queue.length).toBe(0);
  });


  it('raises an exception when calling dequeue() on an empty queue', () => {
    const queue = new Queue();
    expect(queue.length).toBe(0);
    expect(() => queue.dequeue()).toThrow(RangeError);
  });


  it('raises an exception when calling peek() on an empty queue', () => {
    const queue = new Queue();
    expect(queue.length).toBe(0);
    expect(() => queue.peek()).toThrow(RangeError);
  });


});

