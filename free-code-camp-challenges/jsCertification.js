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

