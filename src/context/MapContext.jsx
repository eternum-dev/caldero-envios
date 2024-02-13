import { createContext, useContext, useState } from "react"
import PropTypes from 'prop-types';


const MapContext = createContext();

export const MapProvider = ({ children }) => {
    const [localCoordinates, setLocalCoordinates] = useState({ lat: -39.83823263400049, lng: -73.21039410495716 });
    const [repartidor, setRepartidor] = useState('');
    const [destination, setDestination] = useState('');
    const [newState, setNewState] = useState(false);
    const [dataRoute, setDataRoute] = useState([]);

    const contextValue = {
        localCoordinates,
        setLocalCoordinates,
        repartidor,
        setRepartidor,
        destination,
        setDestination,
        newState,
        setNewState,
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