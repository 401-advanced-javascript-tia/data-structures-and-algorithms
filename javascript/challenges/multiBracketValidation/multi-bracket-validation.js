'use strict';

function multiBracketValidation(string) {

  const opening = ['[', '{', '('];
  const closing = [']', '}', ')'];
  const findMatch = {
    ']' : '[',
    '}' : '{',
    ')' : '(',
  };

  const stack = [];

  if(string.length > 1 && string.includes('{' || '[' || '(')) {

    for(let i = 0; i < string.length; i++){

      let valAtIndex = string[i];

      if(opening.includes(valAtIndex)) {
        stack.push(valAtIndex);
      }

      if(closing.includes(valAtIndex)) {
        const lastInStack = stack.pop();

        if(lastInStack !== findMatch[valAtIndex]){
          return false;
        }
        return true;
      }

    }

  } else {
    return false;
  }


}

module.exports = multiBracketValidation;
