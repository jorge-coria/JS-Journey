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

