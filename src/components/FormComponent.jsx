import { useContext, useRef } from 'react';
import './formComponent.css';
import { InputAutoComplete } from './InputAutoComplete';
import { MapContext } from '../context/MapContext';
import { useForm } from '../helpers/useForm';




export const FormComponent = () => {

    const { localCoordinates, repartidor } = useContext(MapContext);

    const inputRef = useRef(null);

    const {
        errorInput,
        errorRepartidor,
        onSelectLocal,
        onSelectRepartidor,
        onSubmitForm } = useForm({ inputRef });


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