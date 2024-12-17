import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import thunk from 'redux-thunk'; // thunk allows for asynchronous actions
import tweet from './tweet'; // here we import the tweetsReducer as 'tweet' from tweet.js

const rootReducer = combineReducers({ // Here we combine the tweet reducer (and any other reducers, if there were any for this project) into the root reducer. This rootReducer will later be passed into the configureStore function we define as part of the configuration we will use when we create an instance of the Redux store.
  tweet
});

let enhancer;
if (import.meta.env.MODE !== "production") {
  const logger = (await import("redux-logger")).default; // Here we dynamically import the redux logger and include it in the middleware if we're in a development environment.
  const composeEnhancers = // Here we use composeEnhancers to integrate the Redux DevTools extension for a better development experience if we're in development mode.
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  enhancer = composeEnhancers(applyMiddleware(thunk, logger)); // Here we apply thunk and the logger as middlewares if we're in development
}
else {
  enhancer = applyMiddleware(thunk); // If we're in a production environemtn, we only apply 'thunk' as a middleware
}

const configureStore = (preloadedState) => { // Here we define a fucntion that will configure our Redux store when invoked. It takes a 'preloadedState' as an argument. THis is an optional initial state for the store, useful for server-side rendering or restoring state from local storage.
  return createStore(rootReducer, preloadedState, enhancer); // When configure store is invoked, we actually create a Redu store using the rootReducer, preloadedState, and enhancer to configure the store.
};

//^ In Summary: We combine our reducers into a single rootReducer. We apply the thunk middleware for handling asynchronous actions. We add redux-logger and Redux DevTools if we're in a development environment for better debugging. The configureStore function initializes the Redux store with the rootReducer, preloadedState, and enhancer.

// Note that he preloadedState allows for initializing the store with a specific state, which can be useful in certain scenarios liek SSR or state persistence. preloadedState is often used to hydrate the Redux store with data that was fetched before the app was initialized. This can come from server-side rendering (SSR), local storage, or other sources.

// For instance: If we had some initial state in our main.jsx file that we wanted to load into the Redux store when the app starts, we would pass it into 'configureStore' as the preloadedState argument. 

export default configureStore;
