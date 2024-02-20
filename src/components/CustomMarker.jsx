import { AdvancedMarker, Pin } from "@vis.gl/react-google-maps"



export const CustomMarker = ({ position }) => {
    return (

        <AdvancedMarker position={position}>
            <Pin background={'#FBBC04'} glyphColor={'#000'} borderColor={'#000'} />
        </AdvancedMarker>

    )
}