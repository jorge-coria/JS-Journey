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

/* Use a Switch Statement to Handle Multiple Actions - Redux */

const defaultState = {
  authenticated: false
};

const authReducer = (state = defaultState, action) => {
  switch (action.type) {
    case 'LOGIN':
      return {authenticated: true};
    case 'LOGOUT':
      return {authenticated: false};
    default:
      return defaultState;
  }
};

const store = Redux.createStore(authReducer);

const loginUser = () => {
  return {
    type: 'LOGIN'
  }
};

const logoutUser = () => {
  return {
    type: 'LOGOUT'
  }
};

/* Register a Store Listener - Redux
Store.subscribe allows us to stay updated when an action is dispatched against the store */

const ADD = 'ADD';

const reducer = (state = 0, action) => {
  switch(action.type) {
    case ADD:
      return state + 1;
    default:
      return state;
  }
};

const store = Redux.createStore(reducer);

// Global count variable:
let count = 0;

const addOne = () => (count += 1);
store.subscribe(addOne);

store.dispatch({type: ADD});
console.log(count);
store.dispatch({type: ADD});
console.log(count);
store.dispatch({type: ADD});
console.log(count);

/* Combine Multiple Reducers - Redux
Redux provides reducer composition for complex state model
We define diff reducers for diff pieces of app state..
then compose these reducers together into one root reducer
After composing a root reducer, state held in the store ..
is a single object containing the key name properties. this case count + auth */

const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';

const counterReducer = (state = 0, action) => {
  switch(action.type) {
    case INCREMENT:
      return state + 1;
    case DECREMENT:
      return state - 1;
    default:
      return state;
  }
};

const LOGIN = 'LOGIN';
const LOGOUT = 'LOGOUT';

const authReducer = (state = {authenticated: false}, action) => {
  switch(action.type) {
    case LOGIN:
      return {
        authenticated: true
      }
    case LOGOUT:
      return {
        authenticated: false
      }
    default:
      return state;
  }
};

const rootReducer = Redux.combineReducers({
  count: counterReducer,
  auth: authReducer
})

const store = Redux.createStore(rootReducer);

/* Send Action Data to the Store - Redux
Some actions usually originate from some UI and carry data with them */

const ADD_NOTE = 'ADD_NOTE';

const notesReducer = (state = 'Initial State', action) => {
  switch(action.type) {
    case ADD_NOTE:
      return action.text;
    default:
      return state;
  }
};

const addNoteText = (note) => {
  return {
    type: ADD_NOTE,
    text: note
  };
};

const store = Redux.createStore(notesReducer);

console.log(store.getState());
store.dispatch(addNoteText('Hello!'));
console.log(store.getState());

/* Use Middleware to Handle Asynchronous Actions - Redux
We can call asynchronous endpoints by using Redux Thunk middleware
Our asynchronous request: setTimeout()..
We dispatch an action before initiating async behavior so our app state knows that..
data is being requested. Once data is received, dispatch another action which..
carries the data as a payload along with info that action is completed. */

const REQUESTING_DATA = 'REQUESTING_DATA'
const RECEIVED_DATA = 'RECEIVED_DATA'

const requestingData = () => { return {type: REQUESTING_DATA} }
const receivedData = (data) => { return {type: RECEIVED_DATA, users: data.users} }

const handleAsync = () => {
  return function(dispatch) {
    // Dispatch request action here
    dispatch(requestingData());

    setTimeout(function() {
      let data = {
        users: ['Jeff', 'William', 'Alice']
      }
      // Dispatch received data action here
      dispatch(receivedData(data));

    }, 2500);
  }
};

const defaultState = {
  fetching: false,
  users: []
};

const asyncDataReducer = (state = defaultState, action) => {
  switch(action.type) {
    case REQUESTING_DATA:
      return {
        fetching: true,
        users: []
      }
    case RECEIVED_DATA:
      return {
        fetching: false,
        users: action.users
      }
    default:
      return state;
  }
};

const store = Redux.createStore(
  asyncDataReducer,
  Redux.applyMiddleware(ReduxThunk.default)
);

/* Writing a Counter with Redux - Redux */

const INCREMENT = 'INCREMENT'
const DECREMENT = 'DECREMENT'

const counterReducer = (state = 0, action) => {
  switch(action.type) {
    case INCREMENT:
      return state + 1;
    case DECREMENT:
      return state - 1;
    default:
      return state;
  }
};

const incAction = () => {
  return {
    type: 'INCREMENT'
  }
}

const decAction = () => {
  return {
    type: 'DECREMENT'
  }
}

const store = Redux.createStore(counterReducer);

/* Spread syntax (...) can be used when all elements from an object or array need to be included..
in  a list. Can use when we want to add a new item to a local data store, or display all stored items plus..
new addition. Simple version of this action could look like: */

let numberStore = [222, 47, 369];
let newNumber = 452;
numberStore = [...numberStore, newNumber]; // now [222, 47, 369, 452]

/* Never Mutate State - Redux
We return a new copy of state, never modify state directly 
Here we add a new todo to state's todo array and return new copy */

const ADD_TO_DO = 'ADD_TO_DO';

// A list of strings representing tasks to do:
const todos = [
  'Go to the store',
  'Clean the house',
  'Cook dinner',
  'Learn to code',
];

const immutableReducer = (state = todos, action) => {
  switch(action.type) {
    case ADD_TO_DO:
      return [...todos, action.todo]
      // or return state.concat(action.todo)
    default:
      return state;
  }
};

const addToDo = (todo) => {
  return {
    type: ADD_TO_DO,
    todo
  }
}

const store = Redux.createStore(immutableReducer);
