import { useRef, useState } from 'react';
import './formComponent.css';
import { InputAutoComplete } from './InputAutoComplete';
import { useMapContext } from '../context/MapContext';


export const FormComponent = () => {

    const { setLocalCoordinates,
        setRepartidor,
        setRenderState,
        setDestination,
        repartidor,
        localCoordinates } = useMapContext();

    const inputRef = useRef(null);

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

    return (
        <form className='formComponent'>
            <label htmlFor="direccion"
                className='formComponent__direccion'
            >
                Direccion
                <InputAutoComplete
                    inputRef={inputRef}
                    errorInput={errorInput} />

            </label>
            <label htmlFor="local"
                className='formComponent__local'
            >
                Envios
                <select name='local'
                    className={`formComponent__select`}
                    onChange={onSelectLocal}
                    value={localCoordinates}
                >
                    <option value='caldero de la bruja'>caldero de la bruja</option>
                    <option value='caldero del brujo'>caldero del brujo</option>
                </select>
            </label>
            <label htmlFor="repartidor"
                className='formComponent__repartidor'
            >
                Repartidor
                <select name='repartidor'
                    className={`formComponent__select ${errorRepartidor ? 'error-animation' : ''}`}
                    value={repartidor}
                    onChange={onSelectRepartidor}
                >
                    <option value='seleccionar'> selecciona un repartidor </option>
                    <option value='erwin thon'> erwin thon</option>
                    <option value='ferrnando alonso'>ferrnando alonso</option>
                </select>
            </label>

            <button
                type='submit'
                className='formComponent__button'
                onClick={onSubmitForm}
            >
                calcular
            </button>
        </form >
    )
}