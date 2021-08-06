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
        <button onClick={this.handleClick}>Click Me</button>
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

/* Create a Controlled Form - React
event.preventDefault() orevents the default form submit..
behavior which refreshes the web page */

class MyForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
      submit: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event) {
    this.setState({
      input: event.target.value
    });
  }
  handleSubmit(event) {
    event.preventDefault()
    this.setState({
      submit: this.state.input
    })
  }
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input value={this.state.input}
                  onChange={this.handleChange} 
          />
          <button type='submit'>Submit!</button>
        </form>
        <h1>{this.state.submit}</h1>
      </div>
    );
  }
}

/* Pass State as Props to Child Components - React
Stateful Component contains state, that then renders child components
Unidirectional Data flow - state flows one direction down the tree of app's components
Complex stateful apps can be broken down into just a few, or a single component
Principle of separating state logic from UI logic */

class MyApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'CamperBot'
    }
  }
  render() {
    return (
       <div>
         <Navbar name={this.state.name}/>
       </div>
    );
  }
};

class Navbar extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
    <div>
      <h1>Hello, my name is: {this.props.name}</h1>
    </div>
    );
  }
};

/* Pass a Callback as Props - React
Single source of Truth remains 'state' of parent component
Not limited to passing data to child components..
Can pass handler functions or any method thats defined on a React comp to a child comp. */

class MyApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: ''
    }
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    this.setState({
      inputValue: event.target.value
    });
  }
  render() {
    return (
       <div>
        
        <GetInput input={this.state.inputValue}
                  handleChange={this.handleChange} />
  
        <RenderInput input={this.state.inputValue} />
        
       </div>
    );
  }
};

class GetInput extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h3>Get Input:</h3>
        <input
          value={this.props.input}
          onChange={this.props.handleChange}/>
      </div>
    );
  }
};

class RenderInput extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h3>Input Render:</h3>
        <p>{this.props.input}</p>
      </div>
    );
  }
};

/* Render React on the Server with renderToString - React
Rendering a React comp on server may make sense when..
we want search engines to index web page content..
we want faster page load experience
We pass a class to renderToString, similar to passing a component to a render method */

class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <div/>
  }
};

ReactDOMServer.renderToString(<App />);

/* Use the Lifecycle Method componentWillMount - React
These methods allow us to perform actions at specific points in lifecycle of a comp.
Quick list of main lifecycle hooks: componentWillMount(), componentDidMount(), 
shouldComponentUpdate(), componentDidUpdate(), componentWillUnmount()
This method deprecated in 16.X and removed in version 17. */

class MyComponent extends React.Component {
  constructor(props) {
    super(props);
  }
  componentWillMount() {
    console.log("I love you mom and dad!")
  }
  render() {
    return <div />
  }
};

/* Add Event Listeners - React
React's synthetic event system behaves the same regardless of user browser
Do clean-up on React components before they are unmounted and destroyed */

class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      message: ''
    };
    this.handleEnter = this.handleEnter.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }

  componentDidMount() {
    document.addEventListener("keydown", this.handleKeyPress)
  }

  componentWillUnmount() {
    document.removeEventListener("keydown", this.handleKeyPress)
  }

  handleEnter() {
    this.setState((state) => ({
      message: state.message + 'You pressed the enter key! '
    }));
  }

  handleKeyPress(event) {
    if (event.keyCode === 13) {
      this.handleEnter();
    }
  }
  render() {
    return (
      <div>
        <h1>{this.state.message}</h1>
      </div>
    );
  }
};

/* Optimize Re-Renders with shouldComponentUpdate - React
Comp receives new state or props, it re-renders itself and children
With sCU(), when child comp receive new state or prop, declare if comp should update
Now we can prevent a re-render when a comp receives props by checking to see if props changed */

class OnlyEvens extends React.Component {
  constructor(props) {
    super(props);
  }
  
  shouldComponentUpdate(nextProps, nextState) {
    console.log("Should I update?");
    if (nextProps.value % 2 === 0) {
      return true;
    }
    return false;
  }
  
  componentDidUpdate() {
    console.log("Component re-rendered");
  }
  
  render() {
    return <h1>{this.props.value}</h1>;
  }
}

class Controller extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 0
    };
    this.addValue = this.addValue.bind(this);
  }
  addValue() {
    this.setState(state => ({
      value: state.value + 1
    }));
  }
  render() {
    return (
      <div>
        <button onClick={this.addValue}>Add</button>
        <OnlyEvens value={this.state.value} />
      </div>
    );
  }
}

/* Introducing Inline Styles - React
We can style JSX elements in React by importing styles from our stylesheet..
We can apply inline styles, JSX style attr. set to an object and camelCase properties */

class Colorful extends React.Component {
  render() {
    return (
      <div style={{color: "red", fontSize: 72}}>Big Red</div>
    );
  }
};
