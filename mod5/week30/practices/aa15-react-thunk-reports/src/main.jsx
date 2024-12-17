import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { Provider as ReduxProvider } from 'react-redux';
import configureStore from './store';

const store = configureStore(); // Here, we create the Redux store by calling the configureStore function. configureStore is imported from './store' This store object holds the state and the logic to update the state using Redux actions and reducers.

async function enableMocking() {
  if (import.meta.env.MODE !== 'development') { // Check to see if the current environment is NOT development
    return; // If it's not, the function returns and stops code execution.
  }

  const { worker } = await import('./mocks/browser'); // Here we dynamically import the mocking setup if we ARE working in a development environment. This helps to keep our production bundles smaller.

  // `worker.start()` returns a Promise that resolves
  // once the Service Worker is up and ready to intercept requests.
  worker.start({ quiet: true });
}

enableMocking().then(() => {
  ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
      <ReduxProvider store={store}>
        <App />
      </ReduxProvider>
    </React.StrictMode>
  );
});

//! So this is what is happening in our main.jsx file:

//^ We create a Redux store using configureStore. In development mode, a service worker for mocking API requests is conditionally enabled. Then the React app is rendered, with the entire app wrapped in a ReduxProvider to provide the Redux store to all components.

// This setup ensures that your application has access to the Redux store and can utilize mocking for API requests during development, providing a robust environment for building and testing our app.
