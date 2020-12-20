// ------------------- Iterate through an array with a for loop

var myArr = [ 2, 3, 4, 5, 6];


let total = 0;

for (var i = 0; i < myArr.length; i++){
    total = total += myArr[i];
}

// ------------------- Nesting for loops

function multiplyAll(arr) {
    var product = 1;

    for( let i = 0; i < arr.length; i++ ){
        for ( let j = 0; j < arr[i].length; j++ ){
        product = product * arr[i][j];
    }
}

// Only change code above this line
return product;
}

multiplyAll([[1,2],[3,4],[5,6,7]]);

// -------------------- do while loops


  var myArray = [];
  var i = 10;
  

  do {
    myArray.push(i);
    i++;
  } while (i < 5);

// ------------------- finding a remainder


var remainder = 11 % 3;


// -------------------- Compound Assignment with Augmented Additions

var a = 3;
var b = 17;
var c = 12;

a += 12;
b += 9;
c += 7;

// -------------------- Compound Assignment with Augmented Subtraction

var a = 11;
var b = 9;
var c = 3;

a -= 6;
b -= 15;
c -= 1;

// -------------------- Compound Assignment with Augmented Multiplation

var a = 5;
var b = 12;
var c = 4.6;

a *= 5;
b *= 3;
c *= 10;


// -------------------- Compound Assignment with Augmented Division

var a = 48;
var b = 108;
var c = 33;

a /= 12;
b /= 4;
c /= 11;

// -------------------- Concatenating strings with plus operator

var myStr = 'This is the start. ' + 'This is the end.';


// -------------------- Concatenating strings with plus equals operator


var myStr = 'This is the first sentence. ';

myStr += 'This is the second sentence.';


// -------------------- Constructing strings with variables

var myName = 'Tia Low';
var myStr = 'My name is ' + myName + ' and I am well!';

// -------------------- Appending variables to strings

// Change code below this line

var someAdjective = 'challenging, exciting, brain-pretzeling!';
var myStr = "Learning to code is ";

myStr += someAdjective;

// -------------------- Find the length of a string

var lastNameLength = 0;
var lastName = "Lovelace";


lastNameLength = lastName.length;

// -------------------- Bracket notation to find character in string


var firstLetterOfLastName = "";
var lastName = "Lovelace";

firstLetterOfLastName = lastName[0]; // Change this line

// -------------------- Understand string immutability

var myStr = "Jello World";

myStr = "Hello World"; // Change this line
// Only change code above this line


// -------------------- Return a value from function with return

function timesFive(num) {
  return num * 5;
}

// -------------------- Understanding undefined value returned from a function


var sum = 0;

function addThree() {
  sum = sum + 3;
}


function addFive() {
  sum = sum + 5;
}

// Only change code above this line

addThree();
addFive();

// -------------------- Assignment with a returned value


var processed = 0;

function processArg(num) {
  return (num + 3) / 5;
}


processed = processArg(7);


// -------------------- Stand in line (queue)


function nextInLine(arr, item) {


  arr.push(item);
  let itemToReturn = arr[0];
  arr.splice(0, 1)
  
  return itemToReturn;
  // Only change code above this line

}

var testArr = [1,2,3,4,5];

// Display code
console.log("Before: " + JSON.stringify(testArr));
console.log(nextInLine(testArr, 6));
console.log("After: " + JSON.stringify(testArr));


// -------------------- Understanding booleans

function welcomeToBooleans() {



  return true; // Change this line

  // Only change code above this line
}


// -------------------- Use conditional logic with if statements

function trueOrFalse(wasThatTrue) {


  if(wasThatTrue === true){
    return 'Yes, that was true'
  } else {
    return 'No, that was false'
  }



  // Only change code above this line

}

// -------------------- Comparison with the equality operator

function testEqual(val) {
  if (val == 12) { // Change this line
    return "Equal";
  }
  return "Not Equal";
}

testEqual(10);

// -------------------- Comparison with strict equality operator

function testStrict(val) {
  if (val === 7) { // Change this line
    return "Equal";
  }
  return "Not Equal";
}

testStrict(10);


// -------------------- Comparison with inequality operator

function testNotEqual(val) {
  if (val != 99) { // Change this line
    return "Not Equal";
  }
  return "Equal";
}

testNotEqual(10);


// -------------------- Comparison with strict inequality operator

function testStrictNotEqual(val) {
  if (val !== 17) { // Change this line
    return "Not Equal";
  }
  return "Equal";
}

testStrictNotEqual(10);