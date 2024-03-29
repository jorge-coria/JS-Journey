/* Create complex multi-dimensional arrays - Data Structures
Modified an array to have 5 levels of depth, outer-most array is level 1 */

let myNestedArray = [
  // Only change code below this line
  ['unshift', false, 1, 2, 3, 'complex', 'nested'],
  [['loop', 'shift', 6, 7, 1000, 'method', 'deep']],
  [[['concat', false, true, 'spread', 'array']]],
  [[['mutate', 1327.98, 'splice', 'slice', 'push', 'deeper']]],
  [[[['iterate', 1.3849, 7, '8.4876', 'arbitrary', 'depth', 'deepest']]]]
  // Only change code above this line
];

/* Modify an Object Nested Within an Object - Data Structures
Practiced setting the value of a nested key */

let userActivity = {
  id: 23894201352,
  date: 'January 1, 2017',
  data: {
    totalUsers: 51,
    online: 42
  }
};

userActivity.data.online = 45;

/* Access Property Names with Bracket Notation - Data Structures
Returning the value of the scannedItem key in the foods object */

function checkInventory(scannedItem) {
  return foods[scannedItem];
}

/* Use the delete Keyword to Remove Object Properties - Data Structures
Removing a key-value pair from an object using delete keyword */

delete foods.oranges;
delete foods.plums;
delete foods.strawberries;

console.log(foods);

/* Check if an Object has a Property - Data Structures
users.hasOwnProperty('prop') -- Using method
'prop' in users; -- using keyword */

function isEveryoneHere(userObj) {
  if (userObj.hasOwnProperty('Alan') &&
  userObj.hasOwnProperty('Jeff') &&
  userObj.hasOwnProperty('Sarah') &&
  userObj.hasOwnProperty('Ryan')
  ) {
    return true;
  } else {
    return false;
  }
}

/* Iterate Through the Keys of an Object with a for...in Statement - Data Structures
Learned to check the values of an object's property
Used a for.. in loop to iterate and a combo of bracket and dot notation to access property */

function countOnline(usersObj) {
  let onlineCounter = 0;

  for (let user in usersObj) {
    if (usersObj[user].online === true) {
      onlineCounter++;
    }
  }

  return onlineCounter;
}

/* Generate an Array of All Object Keys with Object.keys() - Data Structures
Object.keys returns an array w/ strings representing each prop in the object */

function getArrayOfUsers(obj) {
  return Object.keys(obj);
}

console.log(getArrayOfUsers(users));

/* Modify an Array Stored in an Object - Data Structures
Using push() to modify the contents of an array stored inside of an Object */

function addFriend(userObj, friend) {
  userObj.data.friends.push(friend);
  return userObj.data.friends;
}

console.log(addFriend(user, 'Pete'));

/* Find the Longest Word in a String - Basic Algorithm Scripting
Split a string into an array, each word in its own index
Initialized a counter to 0, and updated counter when comparing each index to counter
The greater value compared between maxLength and counter stored as maxLength and returned */

function findLongestWordLength(str) {
  let words = str.split(' ');
  let maxLength = 0;

  for (let i = 0; i < words.length; i++) {
    if (words[i].length > maxLength) {
      maxLength = words[i].length;
    }
  }
  return maxLength;
}

findLongestWordLength("The quick brown fox jumped over the lazy dog");

/* Return Largest Numbers in Arrays - Basic Algorithm Scripting
Iterate a multi-dim array and compare its indexes
Storing largest number of each sub array into an array and returning it */

function largestOfFour(arr) {
  let results = [];

  for (let i = 0; i < arr.length; i++) {
    let largestNumber = arr[i][0];

    for (let j = 1; j < arr[i].length; j++) {
      if (arr[i][j] > largestNumber) {
        largestNumber = arr[i][j];
      }
    }

  results[i] = largestNumber;
  }
  
  return results;
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);

/* Create a Method on an Object - Object Oriented Programming
Methods are props that are functions.
Here sayLegs method accesses the dog's numLegs property and prints with in a string */

let dog = {
  name: "Spot",
  numLegs: 4,
  sayLegs: function() {return "This dog has " + dog.numLegs + " legs.";}
};

dog.sayLegs();

/* Make Code More Reusable with the this Keyword - OOP
Modified sayLegs method to use this keyword, makes code reusable and easier to read */

sayLegs: function() {return "This dog has " + this.numLegs + " legs.";}

/* Define a Constructor Function - Object Oriented Programming
Constructors define props and behaviors instead of returning a value */

function Dog() {
  this.name = 'Tony';
  this.color = 'black';
  this.numLegs = 4;
}

/* Extend Constructors to Receive Arguments - OOP
Designed const.fun() to accept parameters */

function Dog(name, color) {
  this.name = name;
  this.color = color;
  this.numLegs = 4;
}

let terrier = new Dog('Goon', 'Black');

/* Verify an Object's Constructor with instanceof - OOP
instanceof allows us to compare an object to a contructor */

function House(numBedrooms) {
  this.numBedrooms = numBedrooms;
}

let myHouse = new House(4);

myHouse instanceof House;

/* Understand Own Properties - OOP
The for loop adds all of the own properties of Bird to ownProps array */

let ownProps = [];

for (let property in canary) {
  if (canary.hasOwnProperty(property)) {
    ownProps.push(property);
  }
}

console.log(ownProps);

/* Use Prototype Properties to Reduce Duplicate Code - OOP
Reduce duplicated variables inside instances of Objects using prototype */

function Dog(name) {
  this.name = name;
}

Dog.prototype.numLegs = 4;

let beagle = new Dog("Snoopy");

/* Iterate Over All Properties - OOP
Adding instance's own properties to an array, and proto props to another array */

let beagle = new Dog("Snoopy");

let ownProps = [];
let prototypeProps = [];

for (let property in beagle) {
  if (beagle.hasOwnProperty(property)) {
    ownProps.push(property);
  } else {
    prototypeProps.push(property);
  }
}

/* Understand the Constructor Property - OOP
Constructor prop comes w/ object instances
Better to use instanceof to check type of object - const prop can be overwritten */

function joinDogFraternity(candidate) {
  if (candidate.constructor === Dog) {
    return true;
  } else {
    return false;
  }
}

/* Change the Prototype to a New Object - OOP
Set prototype to a new object that contains the props, all added at once */

function Dog(name) {
  this.name = name;
}

Dog.prototype = {
  numLegs: 4,
  eat: function() {
    console.log("yum yum yum bwaha");
  },
  describe: function() {
    console.log("My name is " + this.name);
  }
};

// Remember to Set the Constructor Property when Changing the Prototype - OOP

Dog.prototype = {
  constructor: Dog,
  numLegs: 4,
  eat: function() {
    console.log("nom nom nom");
  },
  describe: function() {
    console.log("My name is " + this.name);
  }
};

/* Understand Where an Object’s Prototype Comes From - OOP
An object's prototype comes from the const function that created it. */

Dog.prototype.isPrototypeOf(beagle);

/* Understand the Prototype Chain - OOP
Object is a supertype for all objects in JS
Any object can use the hasOwnProperty method */

Object.prototype.isPrototypeOf(Dog.prototype);

/* Understand the Immediately Invoked Function Expression (IIFE) - OOP
Function executes as soon as it is declared
No name and is not stored in a variable
Two parentheses at end of IIFE cause it to be immediately exec or invoked */

(function () {
  console.log("A cozy nest is ready");
})();

/* Use an IIFE to Create a Module - OOP
Grouped related functionality into a single object / module  */

let funModule = (function () {
    return {
      isCuteMixin: function(obj) {
        obj.isCute = function() {
          return true;
        };
      },
      singMixin: function(obj) {
        obj.sing = function() {
          console.log("Singing to an awesome tune");
        };
      }
    }
})();

/* Learn about Functional Programming
F.P. is about isolated fnc -> no dep on prog state. incl. global var
"" pure fnc -> same input gives same output
"" fnc limited side fx -> any changes to prog state. out of fnc are cntrld. */

/* Understand Functional Programming Terms
Callback -> slipped into another fnc to decide invocation of that fnc.
First Class Fnc -> fnc that can b assigned to a var, and passed or returned into another fnc
Higher Order Fnc -> fnc that take a fnc as an arg, or return a fnc as a return val
Lambda -> functions which were passed in or returned from another function */

/* Understand the Hazards of Using Imperative Code - Functional Programming
Have been on this challenge for several hours now.
Just broke through and now understand why we must be careful when using functions like splice()
These functions modify the array they're executed on and return the modified array -> not deterministic */

