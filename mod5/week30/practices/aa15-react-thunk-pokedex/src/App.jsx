import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import PokemonBrowser from './components/PokemonBrowser';

const router = createBrowserRouter(
  // Below we have an array of route paths. We use the .map method to iterate over each path in the array in order to create a 'route' object. Each object has a path and an element property. This creates a router configuration where PokemonBrowser component is rendered for all three paths.
  ["/", "/pokemon", "/pokemon/:pokemonId"].map((path) => {
    return {
      path,
      element:  <PokemonBrowser />
    };
  })
);

const App = () => {
  return <RouterProvider router={router} />;
};

//^ We use the createBrowserRouter function to define routes and their corresponding components. Three paths are defined, and they all render the PokemonBrowser component. The RouterProvider component provides the routing context to the entire application. The root (App) component of the application sets up our routing.

export default App;
