import PupForm from './components/PupForm';
import PupImage from './components/PupImage';
import { PupContext } from './context/PupContext';

<PupContext.Provider value={ }>

const App = () => (
  <div id="app">
    <PupForm />
    <PupImage />
  </div>
  );

</PupContext.Provider>

export default App;
