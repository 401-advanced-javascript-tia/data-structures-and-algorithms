// ------------------- Iterate through an array with a for loop

// Setup
var myArr = [ 2, 3, 4, 5, 6];

// Only change code below this line

let total = 0;

for (var i = 0; i < myArr.length; i++){
    total = total += myArr[i];
}

// ------------------- Nesting for loops

function multiplyAll(arr) {
    var product = 1;
// Only change code below this line

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

  // Setup
  var myArray = [];
  var i = 10;
  
  // Only change code below this line
  do {
    myArray.push(i);
    i++;
  } while (i < 5);

// ------------------- finding a remainder

// Only change code below this line

var remainder = 11 % 3;


// -------------------- Compound Assignment with Augmented Additions

var a = 3;
var b = 17;
var c = 12;

// Only change code below this line
a += 12;
b += 9;
c += 7;

// -------------------- Compound Assignment with Augmented Subtraction

var a = 11;
var b = 9;
var c = 3;

// Only change code below this line
a -= 6;
b -= 15;
c -= 1;

// -------------------- Compound Assignment with Augmented Multiplation

var a = 5;
var b = 12;
var c = 4.6;

// Only change code below this line
a *= 5;
b *= 3;
c *= 10;


// -------------------- Compound Assignment with Augmented Division

var a = 48;
var b = 108;
var c = 33;

// Only change code below this line
a /= 12;
b /= 4;
c /= 11;

// -------------------- Concatenating strings with plus operator

var myStr = 'This is the start. ' + 'This is the end.';


// -------------------- Concatenating strings with plus equals operator

// Only change code below this line

var myStr = 'This is the first sentence. ';

myStr += 'This is the second sentence.';


// -------------------- Constructing strings with variables

// Only change code below this line
var myName = 'Tia Low';
var myStr = 'My name is ' + myName + ' and I am well!';

// -------------------- Appending variables to strings

// Change code below this line

var someAdjective = 'challenging, exciting, brain-pretzeling!';
var myStr = "Learning to code is ";

myStr += someAdjective;

// -------------------- Find the length of a string

// Setup
var lastNameLength = 0;
var lastName = "Lovelace";

// Only change code below this line

lastNameLength = lastName.length;

// -------------------- Bracket notation to find character in string


// Setup
var firstLetterOfLastName = "";
var lastName = "Lovelace";

// Only change code below this line
firstLetterOfLastName = lastName[0]; // Change this line

// -------------------- Understand string immutability

// Setup
var myStr = "Jello World";

// Only change code below this line
myStr = "Hello World"; // Change this line
// Only change code above this line


// -------------------- Return a value from function with return

function timesFive(num) {
  return num * 5;
}