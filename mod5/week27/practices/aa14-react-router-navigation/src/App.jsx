import { createBrowserRouter, RouterProvider, NavLink, Outlet } from 'react-router-dom';
import Home from './components/Home';
import Stocks from './components/Stocks';
import Movies from './components/Movies';

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: 'stocks',
        element: <Stocks />
      },
      {
        path: 'movies',
        element: <Movies />
      },
      {
        path: '*',
        element: <h1>Page Not Found</h1>
      },
      {
        path: '/not-logged-in',
        element: <h1>You Must Be Logged In To Enter.</h1>
      }
    ]
  }
]);

function App() {
  return (
      <RouterProvider router={router} />
  );
}

function Layout() {
  return (
    <div className="app">
      <h1>App Component</h1>
      <nav className="comp nav">
        <ul>
          <li><NavLink to='/' className={({isActive}) => isActive? 'purple' : ''}>Home</NavLink></li>
          <li><NavLink to='/stocks' className={({isActive}) => isActive? 'purple' : ''}>Stocks</NavLink></li>
          <li><a href="/movies" >Movies</a></li>
        </ul>
      </nav>
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default App;
