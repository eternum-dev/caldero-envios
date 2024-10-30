import { BrowserRouter } from "react-router-dom";
import { APIProvider } from "@vis.gl/react-google-maps";
import { AppRouter } from "./router/AppRouter";
import { MapProvider } from "./context/map/MapProvider";
import { AuthProvider } from "./context/auth/AuthProvider";
import { Header } from "./layout/Header";
import "./App.css";

function App() {
  const API_KEY = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;
  const LIBRARIES_PLACES = import.meta.env.VITE_GOOGLE_MAPS_LIBRARIES_PLACES;

  return (
    <div className="app">
      <APIProvider apiKey={API_KEY} libraries={[LIBRARIES_PLACES]}>
        <BrowserRouter>
          <AuthProvider>
            <MapProvider>
              <Header />
              <AppRouter />
            </MapProvider>
          </AuthProvider>
        </BrowserRouter>
      </APIProvider>
    </div>
  );
}

export default App;
