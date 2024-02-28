import { useMap, useMapsLibrary } from "@vis.gl/react-google-maps";
import { useEffect, useState } from "react";
import { useMapContext } from "../context/MapContext";

export const useMyDirectionService = ({ localCordinates }) => {
    const google = window.google;

    const map = useMap(null);
    const routerLibrary = useMapsLibrary('routes');

    const [directionsService, setDirectionsService] = useState(null);
    const [directionsRenderer, setDirectionRenderer] = useState(null);

    const { destination, setDataRoute, setRenderState } = useMapContext();

    useEffect(() => {
        if (!map || !routerLibrary) return;

        setDirectionRenderer(new routerLibrary.DirectionsRenderer({ map }));
        setDirectionsService(new routerLibrary.DirectionsService());

    }, [map, routerLibrary]);

    useEffect(() => {
        if (!directionsService || !directionsRenderer) return;

        directionsService.route({
            origin: localCordinates,
            destination: destination, // destination
            travelMode: google.maps.TravelMode.DRIVING,
            provideRouteAlternatives: true
        }).then((response) => {
            directionsRenderer.setDirections(response);
            // directionsRenderer.;
            setDataRoute(response.routes);
        })
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [directionsService, directionsRenderer]);

    const resetMap = () => {
        if (directionsRenderer) {
            directionsRenderer.setMap(null);
            setDataRoute([]);
            setRenderState(false)
        }
    };

    return { resetMap }
}