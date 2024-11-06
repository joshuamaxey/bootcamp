import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider,
         Navigate } from 'react-router-dom';
import Greenhouse from './components/Greenhouse';
import Navigation from './components/Navigation';
import Thermometer from './components/Thermometer';
import Hygrometer from './components/Hygrometer';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Navigation />} >
      <Route path="thermometer" element={<Thermometer />} />
      <Route path="hygrometer" element={<Hygrometer />} />
      <Route path="/" element={<Greenhouse />} />
      <Route path ="*" element={<Navigate to="/" replace />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
