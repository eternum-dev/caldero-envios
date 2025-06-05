// import { Map, Marker, useMap } from "@vis.gl/react-google-maps";
import { useContext, useEffect, useRef, useState } from "react";
import { MapContext } from "../../context/map/MapContext";
import { FormComponent } from "../../components";
import "./mapPage.css";
import { Marker, Map } from "react-map-gl/mapbox";
import { RouteLayer } from "../../section";
import { getRoute } from "../../helpers";

export const MapPage = () => {
  const { localCoordinates, addressCoordinates } = useContext(MapContext);
  const [viewState, setViewState] = useState("second");
  const [routeGeoJSON, setRouteGeoJSON] = useState(null);
  const mapRef = useRef();


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
        <RouteLayer route={routeGeoJSON} />
      </Map>
    </main>
  );
};
