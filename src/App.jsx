import './App.css';

import { APIProvider } from '@vis.gl/react-google-maps';
import { MapComponent } from './components/Map';
import { MapProvider } from './context/MapContext';
import { ConfigButton } from './components/ConfigButton';


function App() {

  const API_KEY = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;

  return (
    <div className='app'>
      <h1>caldero envios</h1>
      <APIProvider apiKey={API_KEY} libraries={['places']}>
        <MapProvider>
          <ConfigButton />
          <MapComponent />
        </MapProvider>
      </APIProvider>
    </div >
  )
}

export default App
