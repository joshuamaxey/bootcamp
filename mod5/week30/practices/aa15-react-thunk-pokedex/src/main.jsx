import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import App from './App';
import './index.css';
import configureStore from './store';

const store = configureStore(); // Here we invoke the configureStore() function defined in our store.js Redux file.

if (import.meta.env.MODE !== "production") {
  window.store = store;
}

ReactDOM.createRoot(document.getElementById('root')).render(
  // Here we render the root element (App.jsx) and wrap the App in our store, providing access to the data within the store to all of our React components.
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
