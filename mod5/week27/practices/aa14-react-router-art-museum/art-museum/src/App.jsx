import { createBrowserRouter, RouterProvider } from "react-router-dom";
import harvardArt from "./data/harvardArt";
import GalleryNavigation from "./components/GalleryNavigation";

const router = createBrowserRouter([
  // create our router
  {
    path: "*", // create a universal default route
    element: <h2>Page Not Found</h2>, // at this route, display a basic h2 element
  },
  {
    path: "/",
    element: (
      <>
        <h2>Harvard Art Museum</h2>
        <p>
          Look, but Don&apos;t Touch. Please select a Gallery in the navigation
          bar.
        </p>
      </>
    ),
  },
  {
    path: "/galleries",
    element: <>GalleryNavigation galleries={harvardArt.records}</>,
  },
]);

function App() {
  // return <h1> Hello from App </h1>;
  // console.log(harvardArt)

  return <RouterProvider router={router} />; // pass our router to RouterProvider as the 'router' prop. Then return this component from App.
}

export default App;
