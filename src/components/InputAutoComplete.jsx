import { useMemo, useState } from "react";
import { useAutocomplete } from "@vis.gl/react-google-maps";
import PropTypes from "prop-types";
import "./inputAutoComplete.css";

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
 * @param {object} props                        - The component's props.
 * @param {object} props.inputRef               - Input reference.
 * @param {boolean} props.errorInput            - Boolean response on form submission
 * @param {function} props.onCoordinatesChange  - Function to handle coordinates update
 * @returns {JSX.Element} The rendered input type text.
 */

export const InputAutoComplete = ({
  inputRef,
  errorInput,
  onCoordinatesChange,
}) => {
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

      const coordinates = {
        lat: place.geometry.location.lat(),
        lng: place.geometry.location.lng(),
      };

      onCoordinatesChange(coordinates);
    }
    inputRef.current && inputRef.current.focus();
  };

  useAutocomplete({
    inputField: inputRef?.current,
    onPlaceChanged,
    options: useMemo(() => ({ componentRestrictions: { country: "cl" } }), []),
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
      className={`input-autocomplete ${errorInput ? "error-animation" : ""}`}
      ref={inputRef}
      value={inputValue}
      onChange={onchangeInput}
      placeholder="Introduce una ubicación"
      disabled={errorInput}
      onKeyDown={(event) => {
        event.key === "Enter" && event.preventDefault();
      }}
    />
  );
};

InputAutoComplete.propTypes = {
  inputRef: PropTypes.shape({
    current: PropTypes.instanceOf(Element),
  }),
  errorInput: PropTypes.bool,
  onCoordinatesChange: PropTypes.func,
};
