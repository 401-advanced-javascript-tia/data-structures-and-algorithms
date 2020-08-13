'use strict';

const fibSeq = require('../fibSeq/fibonacci-sequence.js');

describe('Fibonacci Sequence Function', () => {

  test('fibonacci sequence function is defined', () => {
    expect(fibSeq).toBeDefined();
  });

  test('fibonacciSeq() returns the nth element in sequence', () => {

    let int = 4;
    let int2 = 7;
    let int3 = 52;

    expect(fibSeq(int)).toBe(3);
    expect(fibSeq(int2)).toBe(13);
    expect(fibSeq(int3)).toBe(32951280099);

  });

  test('providing a negative number will result in undefined', () => {

    let int = -2;

    expect(fibSeq(int)).not.toBeDefined();

  });

});

