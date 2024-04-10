
import { useMapContext } from "../context/MapContext"



export const FlyTooInit = () => {

    const { localCoordinates } = useMapContext();

    console.log(localCoordinates);
    
    return (
        <button>FlyTooInit</button>
    )
}