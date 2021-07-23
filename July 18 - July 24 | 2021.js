// Assigning the Value of One Variable to Another - Basic JS

var a;
a = 7;
var b;
var b = a;


// Use Destructuring Assignment to Extract Values from ObjectsPassed - ES6

const HIGH_TEMPERATURES = {
  yesterday: 75,
  today: 77,
  tomorrow: 80
};

// Changing code below this line

const today = HIGH_TEMPERATURES.today;
const tomorrow = HIGH_TEMPERATURES.tomorrow;

// New destructured assignment

const { today, tomorrow } = HIGH_TEMPERATURES;

// Create a Module Script - ES6

<script type="module" src="index.js"></script>

// Use export to Share a Code Block - ES6

const uppercaseString = (string) => {
  return string.toUpperCase();
}

const lowercaseString = (string) => {
  return string.toLowerCase()
}

// We can import the things in our named export statement in other files w/o rewriting code

export {uppercaseString, lowercaseString};

/* Create an Export Fallback with export default - ES6
Using export default syntax, declares one fallback value per module */

export default function subtract(x, y) {
  return x - y;
}

/* Import a Default Export - ES6
Subtract is a variable name for the default export in passed .js file */

import subtract from "./math_functions.js"; 
subtract(7,4);

/* Create a JavaScript Promise - ES6
Promise is a constructor function, takes a function as its arg with two param */

const makeServerRequest = new Promise((resolve, reject) => {

});

/* Complete a Promise with resolve and reject - ES6
resolve and reject are both methods that take an arg. */

const makeServerRequest = new Promise((resolve, reject) => {

  let responseFromServer;

  if(responseFromServer) {
    resolve("We got the data");
  } else {
    reject("Data not received");
  }
});

/* Handle a Fulfilled Promise with then - ES6
when server request completes, do something using the then method
responseFromServer is set to true to represent a successful response from a server */

let responseFromServer = true;

makeServerRequest.then(result => {
  console.log(result);
});

/* Handle a Rejected Promise with catch
When server rejects, do something using the catch method
responseFromServer is set to false to represent an unsuccessful response from a server */

let responseFromServer = false;

makeServerRequest.catch(error => {
  console.log(error);
});

/* Catch Off By One Errors When Using Indexing - Debugging
In JS the last index is always one less than the length of the item */

 function countToFive() {
  let firstFive = "12345";
  let len = firstFive.length
  
  for (let i = 0; i < len; i++) {
    console.log(firstFive[i]);
  }
}

/* Use Caution When Reinitializing Variables Inside a Loop - Debugging
Print variable values with each cycle of your loop to uncover buggy reset-variable behavior */

function zeroArray(m, n) {
  // Creates a 2-D array with m rows and n columns of zeroes

  let newArray = [];
  let row = [];
  for (let i = 0; i < m; i++) {
    // Adds the m-th row into newArray

    let row = [];
    // reinitializes the row variable

    for (let j = 0; j < n; j++) {
      // Pushes n zeroes into the current row to create the columns

      row.push(0);
    }
    // Pushes the current row, which now has n zeroes in it, to the array

    newArray.push(row);
  }
  return newArray;
}

let matrix = zeroArray(3, 2);
console.log(matrix);

/* Prevent Infinite Loops with a Valid Terminal Condition - Debugging
Ensure that the terminal condition is reached to prevent infinite loop. 
Here we change i != 4 into i <= 4 and fix the infinite loop */

function myFunc() {
  for (let i = 1; i <= 4; i += 2) {
    console.log("Still going!");
  }
}
