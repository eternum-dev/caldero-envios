// import { Map, Marker, useMap } from "@vis.gl/react-google-maps";
import { useContext, useEffect, useRef, useState } from "react";
import { MapContext } from "../../context/map/MapContext";
import { FormComponent } from "../../components";
import "./mapPage.css";
import { Marker, Map, Source, Layer } from "react-map-gl/mapbox";

export const MapPage = () => {
  const { localCoordinates, addressCoordinates } = useContext(MapContext);
  const [viewState, setViewState] = useState("second");
  const [routeGeoJSON, setRouteGeoJSON] = useState(null);
  const mapRef = useRef();

  const getRoute = async (start, end, token) => {
    const response = await fetch(
      `https://api.mapbox.com/directions/v5/mapbox/driving/${start[0]},${start[1]};${end[0]},${end[1]}?geometries=geojson&access_token=${token}`
    );
    const data = await response.json();
    return data.routes[0].geometry;
  };

  useEffect(() => {
    if (!localCoordinates || !addressCoordinates) return;

    const start = [localCoordinates.lng, localCoordinates.lat];
    const end = [addressCoordinates.lng, addressCoordinates.lat];

    getRoute(start, end, apiKeyMapbox).then((geometry) => {
      setRouteGeoJSON({
        type: "Feature",
        geometry,
      });
    });
    if (mapRef.current) {
      mapRef.current.flyTo({
        center: end,
        zoom: 14,
        speed: 1.5,
        curve: 1,
        essential: true,
      });
    }
  }, [localCoordinates, addressCoordinates]);

  const apiKeyMapbox = import.meta.env.VITE_MAPBOX_TOKEN;
  return (
    <main className="map">
      <Map
        ref={mapRef}
        initialViewState={{
          longitude: localCoordinates?.lng,
          latitude: localCoordinates?.lat,
          zoom: 16,
        }}
        mapboxAccessToken={apiKeyMapbox}
        style={{ width: "100%", height: "100%" }}
        mapStyle="mapbox://styles/mapbox/streets-v11"
        onMove={(event) => setViewState(event.viewState)}
        {...viewState}
      >
        <FormComponent />
        <Marker
          longitude={localCoordinates.lng}
          latitude={localCoordinates.lat}
        />
        {routeGeoJSON && (
          <Source id="route" type="geojson" data={routeGeoJSON}>
            <Layer
              id="route-line"
              type="line"
              paint={{
                "line-color": "#3b9ddd",
                "line-width": 5,
                "line-opacity": 0.8,
              }}
              layout={{
                "line-cap": "round",
                "line-join": "round",
              }}
            />
          </Source>
        )}
      </Map>
    </main>
  );
};
