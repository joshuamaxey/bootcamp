import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import fruitReducer from './fruitReducer';
import articleReducer from './articleReducer';
import thunk from 'redux-thunk';

/*
This is the most important part of this file. You will add your reducers here to
work with your components. `combineReducers` turns all the reducer functions
into one big reducer function.
*/
const rootReducer = combineReducers({
  fruitState: fruitReducer,
  articleState: articleReducer
});

/*
`enhancer` allows you to alter the store and add functionality such as Redux
DevTools and logger (similar to morgan) middleware.
*/
let enhancer;

/*
`compose` gives you the ability to add more than one enhancer to the store. Vite
provides access to environment variables through `import.meta.env`.
`import.meta.env.MODE` has 3 settings:
   1. `npm run dev` makes `import.meta.env.MODE` = 'development'
   2. `npm run build` makes `import.meta.env.MODE` = 'production'
   3. `npm test` makes `import.meta.env.MODE` = 'test'

window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ along with the Chrome extension for
Redux DevTools will set up your Redux DevTools in the browser.
*/
if (import.meta.env.MODE !== "production") { // check to see if the environment is not 'production.' If we are NOT in production mode, then the code below will execute
  const logger = (await import("redux-logger")).default; // Here we dynamically import the redux-logger middleware ONLY if the enviornment is not 'production'. THe 'await import...' syntax is use for dynamic imports, which means that he module is ONLY loaded when it is needed. This helps keep our production bundle smaller by not including the logger in production.
  const composeEnhancers = // Here we set up the 'composeEnhancers' function which is used to compose middleware and other store enhancers.
    typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ // Here we check to see if the code is running in a browser environment (as opposed to a server environment), then check if the Redux DevTools exension is available in the browser.
      ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({ trace: true }) // IF both conditions are true, this code is used. This enables the Redux DevTools extension with tracing, which helpsi n debugging actions and state changes.
      : compose; // If the Redux DevTools extension is not available, it falls back to using the compose function from redux.
  enhancer = composeEnhancers(applyMiddleware(thunk, logger)); // This line uses 'applyMiddeware' to combine the thunk and logger middlewares, then passes them to composeEnhancers. The resulting enhancer is assigned to the 'enhancer' variable. This is the enhancer that will be used when creating the Redux store to apply the middleware.
} else { // otherwise... (if the environment mode IS production)
  enhancer = applyMiddleware(thunk); // ...only the 'thunk' middleware is applied, without the logger or Redux DevTools extension. This helps keep the production build lean and performant.
}

//^ The code above installs the thunk middleware in both production and development environments, and it also applies the logger and redux devTools if we are in a development environment.

/*
`configureStore` is the variable you will use in your root `main.jsx` to give
the Redux store access to the full application.

`createStore`: creates a store object literal ({}).
`preloadedState`: initializes the state. This is mainly used for hydrating state
  from the server. (This is not important right now.)
`enhancer`: see above.
*/
const configureStore = (preloadedState) => {
  return createStore(rootReducer, preloadedState, enhancer);
};

export default configureStore;
