import { useMap, useMapsLibrary } from "@vis.gl/react-google-maps";
import { useEffect, useState } from "react";
// import { MapContext } from "../context/MapContext";
import { useContext } from "react";
import { MapContext } from "../context/map/MapContext";

export const useMyDirectionService = ({ localCordinates }) => {
  const google = window.google;
  const LIBRARIES_ROUTES = import.meta.env.VITE_GOOGLE_MAPS_LIBRARIES_ROUTES;
  const mapId = "map-route";
  const map = useMap(mapId);
  const routerLibrary = useMapsLibrary(LIBRARIES_ROUTES);

  const [directionsService, setDirectionsService] = useState(null);
  const [directionsRenderer, setDirectionRenderer] = useState(null);

  const { destination, setDataRoute, setRenderRoute } = useContext(MapContext);

  useEffect(() => {
    if (!map || !routerLibrary) return;

    setDirectionRenderer(new routerLibrary.DirectionsRenderer({ map }));
    setDirectionsService(new routerLibrary.DirectionsService());
  }, [map, routerLibrary]);

  useEffect(() => {
    if (!directionsService || !directionsRenderer) return;

    directionsService
      .route({
        origin: localCordinates,
        destination: destination, // destination
        travelMode: google.maps.TravelMode.DRIVING,
        provideRouteAlternatives: true,
      })
      .then((response) => {
        directionsRenderer.setDirections(response);
        // directionsRenderer.;
        setDataRoute(response.routes);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [directionsService, directionsRenderer]);

  const resetMap = () => {
    if (directionsRenderer) {
      directionsRenderer.setMap(null);
      setDataRoute([]);
      setRenderRoute(false);
    }
  };

  return { resetMap };
};
