import { useContext, useState } from "react";
import { MapContext } from "../context/map/MapContext";
// import { MapContext } from "../context/MapContext";



export const useForm = ({ inputRef }) => {

    const { setLocalCoordinates,
        setRepartidor,
        setRenderState,
        setDestination,
        repartidor
    } = useContext(MapContext);

    const [errorInput, setErrorInput] = useState(false);
    const [errorRepartidor, setErrorRepartidor] = useState(false);

    const onSelectLocal = (event) => {
        const newCoordinates = JSON.parse(localStorage.getItem(event.target.value));
        setLocalCoordinates(newCoordinates);
    }

    const onSelectRepartidor = (event) => {
        const newRepartidor = localStorage.getItem(event.target.value);
        setRepartidor(newRepartidor);
    }


    const onSubmitForm = (event) => {
        event.preventDefault();


        //validaciones 
        if (inputRef.current.value.length <= 10) {
            setErrorInput(true);
            setTimeout(() => {
                setErrorInput(false);
            }, 600);
            return;
        }

        if (repartidor === '') {
            setErrorRepartidor(true);
            setTimeout(() => {
                setErrorRepartidor(false);
            }, 600);
            return;
        }


        setDestination(inputRef.current.value);
        setRenderState(true);
    }

    return {
        errorInput,
        errorRepartidor,
        onSelectLocal,
        onSubmitForm,
        onSelectRepartidor
    }
}