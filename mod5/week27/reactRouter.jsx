// This is how we will typically set up a React router at App Academy (Note that regularly, this file will be called App.jsx)

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './components/home';

const router = createBrowserRouter([
    { path: "/", element: <Home /> }
]);

function App() {
    return <RouterProvider router={router} />
}

export default App;
