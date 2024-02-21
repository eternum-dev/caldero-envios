import './map.css';
import { Map, Marker } from '@vis.gl/react-google-maps';
import { ResultRoute, FormComponent, Direction, styleMapDark } from './index';
import { useMapContext } from '../context/MapContext';




export const MapComponent = () => {

    const { localCoordinates, renderState } = useMapContext();

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
                            <Direction localCordinates={localCoordinates}/>
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




