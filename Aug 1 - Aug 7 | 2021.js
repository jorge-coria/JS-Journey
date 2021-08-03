/* Typed Arrays - Data Structures
Decide how much memory to give an array in advance */

var byteSize = 64;
var buffer = new ArrayBuffer(64);
var i32View = new Int32Array(buffer);

/* Learn how a Stack Works - Data Structures
Last-In-First-Out type of service.
Here we remove the last element in an array and replace it */

var homeworkStack = ["BIO12","HIS80","MAT122","PSY44"];

homeworkStack.pop();
homeworkStack.push("CS50");

/* Create a Stack Class - Data Structures
Adding useful stack methods to our Stack class */

function Stack() {
  var collection = [];
  this.print = function() {
    console.log(collection);
  };

  this.push = function(element) {
    // pushes element to top of stack
    return collection.push(element);
  };

  this.pop = function() {
    // removes and returns the element on top of the stack
    return collection.pop();
  };

  this.peek = function() {
    // looks at the top element in the stack
    return collection[collection.length - 1];
  };

  this.isEmpty = function() {
    // checks if the stack is empty
    return collection.length === 0;
  };

  this.clear = function() {
    // removes all elements from the stack
    return collection.length = 0;
  };
}

/* Create a Queue Class - Data Structures
FIFO, enqueue pushes to tail, dequeue removes and returns the element in front */

function Queue() {
  var collection = [];
  this.print = function() {
    console.log(collection);
  };
  
  this.enqueue = function(elem) {
    // pushes elem to tail of queue
    return collection.push(elem);
  };

  this.dequeue = function() {
    // removes and returns front elem
    return collection.shift();
  };

  this.front = function() {
    // lets us see front element
    return collection[0];
  };

  this.size = function() {
    // shows the queue length
    return collection.length;
  };

  this.isEmpty = function() {
    // check if queue is empty
    return collection.length === 0;
  };
}

/* Create a Simple JSX Element - React
Using JSX (JS ext) - compiled into JS w/ Babel (transpiler)
Calling ReactDOM.render(JSX, document.getElementbyId('root'))
Places JSX into React rep of DOM,
R then uses snapshots of its own DOM to opt. updating only
specific parts of the actual DOM. */

const JSX = <h1>Hello JSX!</h1>

/* Create a Complex JSX Element
Nested JSX must return a single element
Wrap sibling elements under one parent element
Otherwise code won't transpile */

const JSX = 
<div>
  <h1></h1>
  <p></p>
  <ul>
    <li></li>
    <li></li>
    <li></li>
  </ul>
</div>

/* Render HTML Elements to the DOM
ReactDOM API offers method to render React elements to DOM */

const JSX = (
  <div>
    <h1>Hello World</h1>
    <p>Lets render this to the DOM</p>
  </div>
);

ReactDOM.render(JSX, document.getElementById('challenge-node'));

/* Render a Class Component to the DOM - React
For React components, use the same syntax as rendering nested component */

class TypesOfFood extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h1>Types of Food:</h1>
        <Fruits />
        <Vegetables />
      </div>
    );
  }
};

ReactDOM.render(<TypesOfFood />, document.getElementById('challenge-node'));

/* Write a React Component from Scratch - React
ES6 class which extends React.Component
Render method returns HTML from JSX or null */

class MyComponent extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h1>My First React Component!</h1>
      </div>
    )
  }
}

ReactDOM.render(<MyComponent />, document.getElementById('challenge-node'));
