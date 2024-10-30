//^ Run "npm install react-router-dom"

// This is how we will typically set up a React router at App Academy (Note that regularly, this file will be called App.jsx)

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './components/Home';
import TeamsIndex from './components/TeamsIndex'

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />
    },
    {
        path: "/teams",
        element: <Outlet />, // Note that if we do not include the 'element' attribute here, React automatically assigns an element named 'Outlet' to this (and any) route without an explicit element to render. THe 'Outlet' component will render the child route with the best match. IF there is no child route (or none that matches) it will render 'null'. With respect to this code, the outlet will render 'TeamsInde' at /teams and 'TeamDetails' at /teams/:teamId. 
        children: [
            {
                index: true, // index is an otherwise pathless route that renders the parent's URL (in this case, "/teams"). This is called an index route
                element: <TeamsIndex />
            },
            {
                path: ':teamId',
                element: <TeamDetails />
            }
        ]
    }
]);

function App() {
    return <RouterProvider router={router} />
}

export default App;
