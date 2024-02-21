import { createContext, useContext, useState } from "react"
import PropTypes from 'prop-types';


const MapContext = createContext();

const initialCoords = { lat: -39.83823263400049, lng: -73.21039410495716 };

export const MapProvider = ({ children }) => {
    const [localCoordinates, setLocalCoordinates] = useState(initialCoords);
    const [repartidor, setRepartidor] = useState('');
    const [destination, setDestination] = useState('');
    const [renderState, setRenderState] = useState(false);
    const [dataRoute, setDataRoute] = useState([]);

    const contextValue = {
        localCoordinates,
        setLocalCoordinates,
        repartidor,
        setRepartidor,
        destination,
        setDestination,
        renderState,
        setRenderState,
        dataRoute,
        setDataRoute
    };

    return (

        <MapContext.Provider value={contextValue}>
            {children}
        </MapContext.Provider>

    )
}

export const useMapContext = () => {
    return useContext(MapContext);
};

MapProvider.propTypes = {
    children: PropTypes.any
}