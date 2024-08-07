import { useContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { MapContext } from './MapContext';
import { getLocal } from '../../helpers/getLocal';
import { AuthContext } from '../auth/AuthContext';

const initialCoords = { lat: -39.83823263400049, lng: -73.21039410495716 };

export const MapProvider = ({ children }) => {
    const [localCoordinates, setLocalCoordinates] = useState(initialCoords);
    const [repartidor, setRepartidor] = useState('');
    const [destination, setDestination] = useState('');
    const [renderRoute, setRenderRoute] = useState(false);
    const [dataRoute, setDataRoute] = useState([]);
    const [local, setLocal] = useState(null);

    const { user } = useContext(AuthContext);

    useEffect(() => {
        if(!user) return;
        const fetchLocal = async () => {
            try {
                const localData = await getLocal();

                setLocal(localData);
            } catch (error) {
                throw new Error(error);
            }
        };
        fetchLocal();
    }, [user]);


    const contextValue = {
        localCoordinates,
        setLocalCoordinates,
        repartidor,
        setRepartidor,
        destination,
        setDestination,
        renderRoute,
        setRenderRoute,
        dataRoute,
        setDataRoute,
        local,
        setLocal
    };



    return (
        <MapContext.Provider value={contextValue}>
            {children}
        </MapContext.Provider>
    )
}

MapProvider.propTypes = {
    children: PropTypes.any
}