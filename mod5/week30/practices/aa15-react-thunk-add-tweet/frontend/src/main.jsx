import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import App from './App';
import './index.css';
import configureStore from './store';

const store = configureStore(); // configureStore(), which has been imported from our store.js file, is called to create an instance of the Redux store.

ReactDOM.createRoot(document.getElementById('root')).render( // Here we initialize the React applicaiton by creating a root container in the HTML element with the ID 'root' (the root element is our App component)
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
  // We wrap the App in strictmode to help identify potential problems by activating additional checks and warnings (good for development and debugging)
  //* Then we also wrap the App in "Provider," passing in the Redux store as a prop. This makes the Redux store available to all components within the App component tree.
  // The 'App' component is the root component of our application, which is rendered by React.
);

//^ In summary: A Redux store is created using configureStore. The application is wrapped in React.StrictMode for additional development checks and warnings. The Redux Provider component makes the store available to all nested components within the App. And the main (App) component is rendered by React. 
