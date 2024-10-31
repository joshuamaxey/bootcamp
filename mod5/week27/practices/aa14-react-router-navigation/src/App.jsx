import { createBrowserRouter, RouterProvider, Outlet, NavLink } from 'react-router-dom';
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
    <div className='app'>
      <h1>App Component</h1>
      <nav className='comp nav'>
        <main>
          <Outlet />
        </main>
        <ul>
          <NavLink to='/' className={({isActive}) => isActive? 'purple' : ''}>Home</NavLink>
          <NavLink to='/stocks' className={({isActive}) => isActive? 'purple' : ''}>Stocks</NavLink>
          <a href='/movies'>Movies-Anchor</a>
        </ul>
      </nav>
    </div>
  ),
  {
    path: '/not-logged-in',
    element: <h1>You Must Be Logged In To Enter.</h1>
  }
}

export default App;
