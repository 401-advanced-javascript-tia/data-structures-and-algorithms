'use strict';

const firstRepeatedWord = require('../repeatedWord/repeated-word.js');


it('should properly return the first repeated word', () => {
  const str = 'this is a string where the string repeats words';
  expect(firstRepeatedWord(str)).toEqual('string');
});

it('should properly return the first repeated word when there are multiple repeated words', () => {
  const str = 'this is a string where a string repeats and is repeating a word';
  expect(firstRepeatedWord(str)).toEqual('a');
});

it('should properly return word when dealing with string that includes capital letters', () => {
  const str = 'this is a string where the String repeats a word';
  expect(firstRepeatedWord(str)).toEqual('string');
});

it('should properly return word when dealing with string that includes punctuation', () => {
  const str = 'this is a string, made up of words. The string repeats a word.';
  expect(firstRepeatedWord(str)).toEqual('string');
});

it('should properly return word when dealing with string that includes integers', () => {
  const str = 'this is 1 string where the String repeats a word';
  expect(firstRepeatedWord(str)).toEqual('string');
});

it('should alert user when string doesn\'t contain any repeated words', () => {
  const str = 'This is a string where there are no repeating words.';
  expect(() => firstRepeatedWord(str)).toThrowError('No repeating words found');
});



