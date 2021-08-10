/* Change Inline CSS Conditionally Based on Component State - React
Here we render CSS conditionally based on React comp state
The border of input is rendered when the user completes their input, not live */

class GateKeeper extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: ''
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    this.setState({ input: event.target.value })
  }
  render() {
    let inputStyle = {
      border: '1px solid black'
    };
    if (this.state.input.length > 15) {
      inputStyle.border = '3px solid red';
    }
    return (
      <div>
        <h3>Don't Type Too Much:</h3>
        <input
          type="text"
          style={inputStyle}
          value={this.state.input}
          onChange={this.handleChange} />
      </div>
    );
  }
};

/* Use Array.map() to Dynamically Render Elements - React
Set up our component to render an unknown number of elements dynamically */

const textAreaStyles = {
  width: 235,
  margin: 5
};

class MyToDoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInput: '',
      toDoList: []
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  handleSubmit() {
    const itemsArray = this.state.userInput.split(',');
    this.setState({
      toDoList: itemsArray
    });
  }
  handleChange(e) {
    this.setState({
      userInput: e.target.value
    });
  }
  render() {
    const items = this.state.toDoList.map(i => <li>{i}</li>);
    return (
      <div>
        <textarea
          onChange={this.handleChange}
          value={this.state.userInput}
          style={textAreaStyles}
          placeholder='Separate Items With Commas'
        />
        <br />
        <button onClick={this.handleSubmit}>Create List</button>
        <h1>My "To Do" List:</h1>
        <ul>{items}</ul>
      </div>
    );
  }
}

/* Give Sibling Elements a Unique Key Attribute - React
When we create an array of elements, each one needs a key attr set to a unique value
React will use these keys to keep track of any modification to array items
Keys only unique between sibling elements, not globally across application */

const frontEndFrameworks = [
  'React',
  'Angular',
  'Ember',
  'Knockout',
  'Backbone',
  'Vue'
];

function Frameworks() {
  const renderFrameworks = frontEndFrameworks.map(i => <li key={i}>{i}</li>);
  return (
    <div>
      <h1>Popular Front End JavaScript Frameworks</h1>
      <ul>
        {renderFrameworks}
      </ul>
    </div>
  );
};

/* Use Array.filter() to Dynamically Filter an Array - React
Filters the contents of an array based on a confidition, then returns a new array
Here we filter users who are online, then map over filtered array and return..
a list of usernames that are online */

class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [
        {
          username: 'Jeff',
          online: true
        },
        {
          username: 'Alan',
          online: false
        },
        {
          username: 'Mary',
          online: true
        },
        {
          username: 'Jim',
          online: false
        },
        {
          username: 'Sara',
          online: true
        },
        {
          username: 'Laura',
          online: true
        }
      ]
    };
  }
  render() {
    const usersOnline = this.state.users.filter(user => user.online);
    const renderOnline = usersOnline.map(user => <li key={user.username}>{user.username}</li>)
    return (
      <div>
        <h1>Current Online Users:</h1>
        <ul>{renderOnline}</ul>
      </div>
    );
  }
}

/* Create a Redux Store - Redux
In Redux there is a single state object that's responsible..
for entire state of application. Redux store is single source of truth when it comes to app state */

const reducer = (state = 5) => {
  return state;
}

// Redux methods are available from a Redux object
// For example: Redux.createStore()
// Define the store here:
let store = Redux.createStore(reducer)

/* Get State from the Redux Store - Redux
Retrieve current state held in the Redux object with getState()
Here the code from the last challenge is written more concisely */

const store = Redux.createStore(
  (state = 5) => state
);

const currentState = store.getState()

/* Define a Redux Action - Redux
An action is a JS object that contains info about action event that occurred
Think of as messengers that deliver info about events happening in our app to Redux store */

let action = {
  type: 'LOGIN'
};

/* Define an Action Creator - Redux
A JS function that returns an action..
or action creators create objects that represent action events */

const action = {
  type: 'LOGIN'
}

function actionCreator() {
  return action;
}

/* Dispatch an Action Event - Redux
Calling store.dispatch and passing in the value from action creator..
sends an action back to the store. */

const store = Redux.createStore(
  (state = {login: false}) => state
);

const loginAction = () => {
  return {
    type: 'LOGIN'
  }
};

store.dispatch(loginAction());
// equivalent line: store.dispatch({ type: 'LOGIN' });

/* Handle an Action in the Store - Redux
Reducer responds to action with state modifications
Pure function - takes state and action as ard, and always returns a new state
State is read-only, reducer always returns a new copy of state
Redux does not enforce state immutability, that is my responsibility */

const defaultState = {
  login: false
};

const reducer = (state = defaultState, action) => {
  // Change code below this line
  if (action.type === "LOGIN") {
    return {
      login: true
    };
  } else {
    return state;
  }
};

const store = Redux.createStore(reducer);

const loginAction = () => {
  return {
    type: 'LOGIN'
  }
};
