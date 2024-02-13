import { useAutocomplete } from '@vis.gl/react-google-maps';
import { useState } from 'react';
import PropTypes from 'prop-types';



export const InputAutoComplete = ({ inputRef, errorInput }) => {
    const [inputValue, setInputValue] = useState('');


    const onPlaceChanged = (place) => {
        if (place) {
            setInputValue(place.formatted_address || place.name);
        }
        inputRef.current && inputRef.current.focus();
    };

    useAutocomplete({
        inputField: inputRef && inputRef.current,
        onPlaceChanged,
    });

    const onchangeInput = (event) => {
        setInputValue(event.target.value);
    };


    return (
        <input type="text"
            className={`formComponent__input ${errorInput ? 'error-animation' : ''}`}
            ref={inputRef}
            value={inputValue}
            onChange={onchangeInput}
            placeholder='Introduce una ubicación'
            disabled={errorInput}
        />
    )
}

InputAutoComplete.propTypes = {
    inputRef: PropTypes.object,
    errorInput: PropTypes.bool,
}
