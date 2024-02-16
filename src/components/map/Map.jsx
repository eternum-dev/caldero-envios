import PropTypes from 'prop-types';
import './map.css';
import { Map, Marker } from '@vis.gl/react-google-maps';
import { styleMapDark, Direction } from './index';
import { ResultRoute, FormComponent } from '../index';
import { useMapContext } from '../../context/MapContext';




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



MapComponent.propTypes = {
    coordinates: PropTypes.object,
    renderState: PropTypes.any,
    destination: PropTypes.any,
}
