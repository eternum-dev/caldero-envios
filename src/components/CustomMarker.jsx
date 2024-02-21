import { AdvancedMarker, Pin } from "@vis.gl/react-google-maps"
import PropTypes from 'prop-types';


export const CustomMarker = ({ position }) => {
    return (

        <AdvancedMarker position={position}>
            <Pin background={'#FBBC04'} glyphColor={'#000'} borderColor={'#000'} />
        </AdvancedMarker>

    )
}


CustomMarker.propTypes = {
    position: PropTypes.object
}