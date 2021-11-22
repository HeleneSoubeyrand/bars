import Map from './components/Map'

import { MapContextProvider } from './contexts/Map'

const App = () => {

  return (
    <MapContextProvider>
      <Map />
    </MapContextProvider>
  );
};

export default App;