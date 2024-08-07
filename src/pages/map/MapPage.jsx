import { Map, Marker } from '@vis.gl/react-google-maps';
import { useContext } from 'react';
import { MapContext } from '../../context/map/MapContext';
import { Direction, FormComponent, MapRoute, styleMapDark } from '../../components';
import './mapPage.css';

export const MapPage = () => {

    const { localCoordinates, renderRoute } = useContext(MapContext);



    return (

        <div className='map'>
            <Map zoom={15}
                center={localCoordinates}
                gestureHandling={'greedy'}
                disableDefaultUI={true}
                styles={styleMapDark}
            >
                {
                    renderRoute ?
                        <MapRoute>
                            <Direction localCordinates={localCoordinates} />
                        </MapRoute>
                        :
                        <>
                            <FormComponent />
                            <Marker
                                position={localCoordinates}
                            />
                        </>
                }
            </Map>

        </div >
    )
}




