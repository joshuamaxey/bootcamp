import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import Navbar from './components/Navbar';
import FunctionTitan from './components/functionComponents/FunctionTitan';
import FunctionKuiper from './components/functionComponents/FunctionKuiper';

function Layout() {
  return (
    <div className='main-container'>
      <Navbar />
      <Outlet />
    </div>
  )
}

const router = createBrowserRouter([
  { 
    element: <Layout />,
    children: [
      {
        path: '/',
        element:
          <div className='welcome'>
            <h1>Welcome! Choose Which Cat You Want to Play With</h1>
          </div>
      },
      {
        path: 'titan',
        element: <FunctionTitan />
      },
      {
        path: 'kuiper',
        element: <FunctionKuiper />
      }
    ]
  }
]);

const App = () => {
  return <RouterProvider router={router} />
}

export default App;
