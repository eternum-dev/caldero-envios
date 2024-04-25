import { useState } from 'react';
import PropTypes from 'prop-types';
import { MapContext } from './MapContext';

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

    // TODO: dispach

    return (
        <MapContext.Provider value={contextValue}>
            {children}
        </MapContext.Provider>
    )
}

MapProvider.propTypes = {
    children: PropTypes.any
}