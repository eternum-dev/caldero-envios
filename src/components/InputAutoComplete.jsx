import { useState } from "react";
import { useAutocomplete } from "@vis.gl/react-google-maps";
import PropTypes from "prop-types";

/**
 * InputAutoComplete component.
 *
 * This component renders input type text with autocomplete.
 *
 * Manages the state of the input and is responsible for the use of `useAutocomplete`
 * from `vis.gl/react-google-maps`
 * to handle Google Places API suggestions and updates.
 *
 * @component
 * @example
 * return (
 *   <InputAutoComplete
 *    inputRef={ref}
 *    errorInput={error}
 *  />
 * )
 * @param {object} props              - The component's props.
 * @param {object} props.inputRef     - Input reference.
 * @param {boolean} props.errorInput  - Boolean response on form submission
 * @returns {JSX.Element} The rendered input type text.
 */

export const InputAutoComplete = ({ inputRef, errorInput }) => {
  const [inputValue, setInputValue] = useState("");

  /**
   * Handles place selection from the Google Places API.
   * Updates the input value with the selected place's address or name.
   *
   * @param {object} place - The selected place object from Google Places API.
   */
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

  /**
   * Handles the change event of the input field.
   *
   * @param {Event} event - The input change event.
   */
  const onchangeInput = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <input
      type="text"
      className={`formComponent__input ${errorInput ? "error-animation" : ""}`}
      ref={inputRef}
      value={inputValue}
      onChange={onchangeInput}
      placeholder="Introduce una ubicación"
      disabled={errorInput}
    />
  );
};

InputAutoComplete.propTypes = {
  inputRef: PropTypes.shape({
    current: PropTypes.instanceOf(Element),
  }),
  errorInput: PropTypes.bool,
};
