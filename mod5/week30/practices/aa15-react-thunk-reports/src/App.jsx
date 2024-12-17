import { createBrowserRouter, RouterProvider, NavLink, Outlet } from 'react-router-dom';
import ReportsIndex from './components/ReportsIndex';
import CreateReportForm from './components/CreateReportForm';
import EditReportForm from './components/EditReportForm';
import ReportShow from './components/ReportShow';

function Layout() { // This component defines the layout for our application.
  return (
    <>
      <NavLink to={'/'}>
        <h1>Progress Tracker Lite</h1>
      </NavLink>
      <Outlet />
    </>
  );
}

//^ The NavLink component creates a link to the root path that navigates to the home page when clicked. The home page will display an h1 heading with the text, 'Progress Tracker Lite.' The Outlet component is a placeholder for rendering child routes. It will render the best-matching child route component based on the current URL.

const router = createBrowserRouter([ // the createBrowserRouter function creates a router instance with an array of route objects
  {
    element: <Layout />, // The root route uses Layout as its element
    children: [ // Here we define the child routes of the root route
      {
        path: "/",
        element: <ReportsIndex /> // Here we render this component at the provided path (same for the rest of the routes)
      },
      {
        path: "reports/new",
        element: <CreateReportForm />
      },
      {
        path: "reports/:reportId",
        element: <ReportShow />
      },
      {
        path: "reports/:reportId/edit",
        element: <EditReportForm />
      }
    ]
  }
]);

const App = () => <RouterProvider router={router} />; // THe RouterProvider component wraps the application and provides the router configuration (created using createBrowserRouter) to the rest of the app. This makes sure that routing works throughout the application

export default App;

//^ In summary: The layout component defines a layout with a header and a placeholder for child routes. The router configuration sets up the routes for your application using createBrowserRouter. THe ROOT route uses the Layout component, and the child routes define paths to their corresponding components including dynamic paths with URL parameters. THe App component (line 44) wraps application in RouterProvider to enable routing.

// In main.jsx, we wrap the whole app in ReduxProvider. In App.jsx, we wrap the whole application in RouterProvider. This way, we enable routing (to navigate between different pages and components) and access to the redux store (for state management) throughout the entire application.
