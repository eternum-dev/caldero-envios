import { Map, Marker } from '@vis.gl/react-google-maps';
import { Direction, FormComponent, ResultRoute, styleMapDark } from '../components';
// import { MapContext } from '../context/MapContext';
import './mapPage.css';
import { useContext } from 'react';
import { MapContext } from '../context/map/MapContext';


export const MapPage = () => {

    const { localCoordinates, renderState } = useContext(MapContext);

    return (
        <div className='map'>
            <Map zoom={15}
                center={localCoordinates}
                gestureHandling={'greedy'}
                disableDefaultUI={true}
                styles={styleMapDark}
            >
                {
                    renderState ?
                        <ResultRoute>
                            <Direction localCordinates={localCoordinates} />
                        </ResultRoute>
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




