import { BrowserRouter } from 'react-router-dom';
import { APIProvider } from '@vis.gl/react-google-maps';
import { ConfigButton } from './components/ConfigButton';
import { AppRouter } from './router/AppRouter';
// import { MapProvider } from './context/MapProvider';
import './App.css';
import { MapProvider } from './context/map/MapProvider';
import { AuthProvider } from './context/auth/AuthProvider';



function App() {

  const API_KEY = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;

  return (
    <div className='app'>
      <h1>caldero envios</h1>
      <APIProvider apiKey={API_KEY} libraries={['places']}>
        <BrowserRouter>
          <MapProvider>
            <AuthProvider>
              <ConfigButton />
              <AppRouter />
            </AuthProvider>
          </MapProvider>
        </BrowserRouter>
      </APIProvider>
    </div >
  )
}

export default App
