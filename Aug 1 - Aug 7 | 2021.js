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

/* Use PropTypes to Define the Props You Expect
Type-check + verify components receive props of correct type
Among 7 JS Primitive types, bool and function are only two w/ unusual spelling 
React v15.5.0 - import PropTypes from 'prop-types'; */

const Items = (props) => {
  return <h1>Current Quantity of Items in Cart: {props.quantity}</h1>
};

Items.propTypes = { quantity: PropTypes.number.isRequired };

Items.defaultProps = {
  quantity: 0
};

class ShoppingCart extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <Items />
  }
};
  
/* Review Using Props with Stateless Functional Components - React
Stateless Functional Component accepts props and returns JSX
Stateless Component extends React.Component but does not use internal state
Stateful Component is a class component that maintains its own internal state */

class CampSite extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <Camper/>
      </div>
    );
  }
};

const Camper = (props) => {
  return (
    <div>
      <p>{props.name}</p>
    </div>
  )
};

Camper.defaultProps = { name: 'CamperBot'}
Camper.propTypes = { name: PropTypes.string.isRequired};

/* Create a Stateful Component - React
State is data our app needs to know about that can change over time
Declare a state prop in component class' constructor and set to JS object */

class StatefulComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: "lol" }
  }
  render() {
    return (
      <div>
        <h1>{this.state.name}</h1>
      </div>
    );
  }
};

/* Bind 'this' to a Class Method - React
Bind 'this' in the constructor so it ..
becomes bound to the class methods on component initialization
Here we bind 'this' to handleClick method.
Added a click handler to button, it triggers handleClick() w/ click event */

class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "Hello"
    };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    this.setState({
      text: "You clicked!"
    });
  }
  render() {
    return (
      <div>
        { /* Change code below this line */ }
        <button onClick={this.handleClick}>Click Me</button>
        { /* Change code above this line */ }
        <h1>{this.state.text}</h1>
      </div>
    );
  }
};

/* Write a Simple Counter - React
Added bindings for new methods in the constructor of Counter
We initialize and set state, while assigning click handlers */

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };

  this.reset = this.reset.bind(this);
  this.increment = this.increment.bind(this);
  this.decrement = this.decrement.bind(this);
  }
  
  reset() {
    this.setState({
      count: 0
    });
  }

  increment() {
    this.setState(state => ({
      count: state.count + 1
    }));
  }
  
  decrement() {
    this.setState(state => ({
      count: state.count - 1
    }));
  }
  render() {
    return (
      <div>
        <button className='inc' onClick={this.increment}>Increment!</button>
        <button className='dec' onClick={this.decrement}>Decrement!</button>
        <button className='reset' onClick={this.reset}>Reset</button>
        <h1>Current Count: {this.state.count}</h1>
      </div>
    );
  }
};
