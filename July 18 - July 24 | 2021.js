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

