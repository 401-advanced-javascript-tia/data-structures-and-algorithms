'use strict';

const mBV = require('../multiBracketValidation/multi-bracket-validation.js');


describe('Multi Bracket Validation function', () => {


  it('should be a function', () => {
    expect(mBV).toBeDefined();
  });
  

  it('should return true when brackets are validated', () => {
    const result = mBV('{}[]()');
    expect(result).toBe(true);
  });


  it('should return true when there are more than brackets in string', () => {
    const result = mBV('a{}[[]]b73(())');
    expect(result).toBe(true);
  });


  it('should return false when parameter is single bracket', () => {
    const result = mBV('{');
    expect(result).toBe(false);
  });

  it('should return false when no brackets exist in string', () => {
    const result = mBV('kimchi');
    expect(result).toBe(false);
  });


  it('should return false when validated brackets overlap', () =>{
    const result = mBV('{[}]');
    expect(result).toBe(false);
  });


});
