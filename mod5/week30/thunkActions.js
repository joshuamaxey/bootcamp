//! Thunk actions creators make asynchronous requests to an API and dispatch an action when the response is received.

// The thunk action creator returns a function. When that function is called with an argument of 'dispatch,' it can dispatch one or more actions, immediately or asynchronously.

const thunkActionCreator = () => dispatch => { // The first arrow function, () =>, returns another function (the second arrow function). The second arrow function, dispatch =>, gets returned by the first arrow function. It takes a single parameter 'dispatch.' This syntax is used because our 'thunkActionCreator' is a function that returns another function. It is used to handle asynchronous logic.
    dispatch({ // This line dispatches an action immediately.
        type: 'RECEIVE_MESSAGE',
        message: 'This will be dispatched immediately'
    });
    //^ Notice how THIS action is a POJO, so it can be passed directly into the our reducer.

    setTimeout(() => dispatch({ // Here we dispatch an action after one second as dictatd by setTimeout
        type: 'RECEIVE_MESSAGE',
        message: 'This will be dispatched 1 second later'
    }, 1000))
    //^ This action, on the other hand, is a function. We cannot pass this directly into our reducer.
}

//! In order for this function to work, we need middleware that will intercept all actions of type 'function' before they get to the reducer. This is because functions cannot be directly passed into reducers in Redux. Reducers can only take POJOs with a key of 'type.'

// This middleware is called a 'thunk' middware. Its job is to intercept 'thunk' actions (which are functions that have been dispatched)

//* Note that there is a thunk middleware that in the 'redux-thunk' package so we do not usually need to create our own.

const thunk = ({ dispatch, getState }) => next => action => { // First we write an arrow function that takes in an object with 'dispatch' and 'getState' arguments. The dispatch function allows dispatching actions to the redux store. THe 'getState' function returns the current state of the Redux store. The outer function returns another function, which in turn returns ANOTHER function (which is the action). This function creates a chain where each middleware can process actions and then pass them along to the next middleware in the chain. If there are no more midlewares, 'next' would be the dispatch funciton itself. Finally, 'action' is the action being dispatched.
    if (typeof action === 'function') {
        return action(dispatch, getState); // IF the action is a function, it is called with 'dispatch' and 'getState' as its arguments. This allows the action to perform asynchronous operations and then dispatch other actions based on the resultl of those operations. FOR EXAMPLE, this function could make an API call and then dispatch different actions based on the response.
        //^ WHen an action creator returns a function instead of an action object, the function can perform asynchronous operations and then use 'dispatch' to send one or more action objects to the reducers. The function, basically, is responsible for any asynchronous tasks such as fetching data from an API. Once the asynchronous operation is complete, the function can then use dispatch to send plain action objects to the redux store.
    }
    return next(action); // If the action is NOT a function (is a plain object), it passes to the next middleware in the chain OR to the reducer if there are no more middlewares.
};

export default thunk;

//! Applying the thunk middleware

// to apply the thunk middleware into the store, you can use the applyMiddeware function from redux and use it as a store enhancer when creating the store

//* The code below would be contained within the Redux store

import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';

const configureStore = (preloadedState = {}) => { // This function creates and configures the Redux store with a given initial state, root reducer, and any middleware. First, we define the 'configureStore' function as an arrow fun ction. It takes a single parameter, preloadedState, which is set to an empty object by default. This parameter represents the initial state of the Redux store.
    return createStore( // Here we call the createStore function which creates the Redux store.
        rootReducer, // The rootReducer is the combined reducer function that specifies how the state tree is updated based on actions. It is usually created by combining multiple reducers using 'combineReducers'
        preloadedState, // This is the initial state of the Redux store, which can be useful for setting an initial state based on server-side rendering or persisted state. Recall that by default, the preloadedState is an empty object because the Redux store is always an object.
        applyMiddleware(thunk, logger) // This applyMiddeware function applies middleware to the redux store. Middleware allows you to intercept actions before they reach the reducers, enabling us to add additional functionality (such as the handling of async logic for timeouts or, more commonly, fetch requests to an API)
        //^ The 'thunk' middleware here allows us to write action creators that return a function instead of an action object. These functions can perform ASYNCHRONOUS operations and dispatch actions. For example, the thunk can fetch data from an API and then dispatch actions based on the response.
        // The logger is a middleware that logs actions and state changes to the console, which is helpful for debugging.
    );
};

export default configureStore;

// Recall that the redux store holds the complete state tree of your application. The only way to change the state contained within the store is by dispatching actions.

//! Data Flow

// The configureStore function is called with an optional preloadedState.
// The rootReducer handles how the state updates in response to actions.
// Middlewares like thunk and logger add additional functionality for handling asynchronous actions and logging.
// The createSTore function returns the configured store with the initial state, root reducer, and middleware applied.

//! Application (this is what our main.jsx file might look like):

import configureStore from './store';
import { Provider } from 'react-redux';
import App from './App';

const store = configureStore(); // use the 'configureStore' function defined within our Redux store to create and configure our Redux Store.

ReactDOM.createRoot(deocument.getElementById('root')).render(
    <React.StrictMode>
        <Provider store={store}>
            <App />
        </Provider>
    </React.StrictMode>
)

//! IN SUMMARY

// The 'main.jsx' file is where we:

// 1. Create the redux store using the configureStore function
// 2. Wrap the netire application inside the PRovider component, passing the store to it.
// 3. Render the application, ensuring the store is accessible to all components

//! THUNK ACTION CREATORS REVIEW

// Recall that a regular action creator is a function that returns an action object with a type key.
// A thunk action creator is a function that returns a thunk function, which in turn handles asynchronous logic before returning an action object based on what is returned by the asynchronous logic.

// A thunk function is a function that is invoked by the thunk middleware and gets passed the 'dispatch' and getState' store methods.
// Inside of the thunk function, an asynchronous call is made. After the async call is done, a regular action object can be dispatched.

//* Here's an example of a thunk action creator that dispatches a regular action object

export const RECEIVE_FRUITS = 'Reveive_FRUITS';

export const fetchFruits = () => async (dispatch) => {
    const res = await fetch('/fruits') // get the fruits located at '/fruits'
    const data = await res.json(); // convert the 'fruits' into json format
    res.data = data;
    if (res.ok) { // IF the response status code is less than 400...
        dispatch(receiveFruits(data.fruits)); // dispatch the 'receiveFruits' actio object
    } else {
        throw res; // If the response status code is 400 or greater, throw the response as an error
    }
};

const receiveFruits = (fruits) => {
    return {
        type: RECEIVE_FRUITS,
        fruits,
    };
};

//^ DATA FLOW:

// When 'fetchFruits' is dispatched, it will be intercepted by the thunk middleware, then invoked with the 'dispatch' store method.
// The thunk function will then make an AJAX call to the backend at the router '/fruits.'
// When the AJAX request comes back, the response is processed
// If the response has a status code of less than 400, receiveFruits action is dispatched using the data from the response.
// Finally, that action hits the reducer, changes the store, and updates the React components.

//! Dispatching thunk actions in a component

// Dispatching thunk actions in a component is just like dispatching regular POJO actions.
// We can use the 'useDispatch' React-Redux hook to get the store's 'dispatch' method and then dispatch a thunk action on user input or in a useEffect

//! useEffect and Async functions

// In regular JS, we can use async and await to wait for asynchronous features such as API calls.

//^ useEffect callbacks, however, cannot be specified as 'async.'

// To make an asynchronous fetch within a useEffect hook, we can use strategies such as //* declaring an async function WITHIN THE HOOK, then invoking it:

useEffect(() => {
    const fetchSomething = async () => {
        // fetch call
    }
    
    fetchSomething();
});
