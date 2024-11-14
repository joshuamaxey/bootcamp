import { createStore, combineReducers, applyMiddleware, compose } from 'redux';

const rootReducer = combineReducers({

});

let enhancer;

if (import.meta.env.MODE !== "production") {
    const logger = (await import("redux-logger")).default; // this is a dynamic import so that we can load a module (the logger) only in a certain node environment (development)
    const composeEnhancers = // This is set to the REdux dev tools extension's store enhancer.
        typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
            ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({ trace: true })
            : compose; // set to compose function from redux is the extension fails to load or if you don't have the extension installed in your browser
    enhancer = composeEnhancers(applyMiddleware(logger));
}

// Define a function configureStore that will take in a preloadedState

const configureStore = (preLoadedState) => {
    return createStore(rootReducer, preLoadedState, enhancer);
};

export default configureStore;
