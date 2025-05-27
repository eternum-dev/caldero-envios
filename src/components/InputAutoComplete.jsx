import { useState } from "react";
// import { useAutocomplete } from "@vis.gl/react-google-maps";
import PropTypes from "prop-types";
import "./inputAutoComplete.css";
import { SearchBox } from "@mapbox/search-js-react";

const apiKeyMapbox = import.meta.env.VITE_MAPBOX_TOKEN;
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
 * @param {object} props                                    - The component's props.
 * @param {object} props.inputRef                           - Input reference.
 * @param {boolean} props.errorInput                        - Boolean response on form submission
 * @param {function} props.onCoordinatesChange              - Function to handle coordinates update
 * @param {String | undefined} props.countryRestrictions    - String that restricts the search by country
 * @returns {JSX.Element} The rendered input type text.
 */

export const InputAutoComplete = ({
  // inputRef,
  // errorInput,
  onCoordinatesChange,
  countryRestrictions,
}) => {
  const [inputValue, setInputValue] = useState("");

  /**
   * Handles place selection from the Google Places API.
   * Updates the input value with the selected place's address or name.
   *
   * @param {object} place - The selected place object from Google Places API.
   */
  const onPlaceChanged = (place) => {
    const coords = place?.features[0]?.geometry?.coordinates;
    if (coords) {
      const [lng, lat] = coords;
      const coordinates = {
        lat,
        lng,
      };
      onCoordinatesChange(coordinates);
    }
  };

  /**
   * Handles the change event of the input field.
   *
   * @param {Event} event - The input change event.
   */
  const onchangeInput = (event) => {
    setInputValue(event?.target?.value);
  };

  return (
    <div className="input-auto-complete">
      <SearchBox
        value={inputValue}
        onChange={onchangeInput}
        accessToken={apiKeyMapbox}
        onRetrieve={onPlaceChanged}
        options={{ country: countryRestrictions }}
        placeholder="Balmaceda 2750"
      />
    </div>
  );
};

InputAutoComplete.propTypes = {
  inputRef: PropTypes.shape({
    current: PropTypes.instanceOf(Element),
  }),
  errorInput: PropTypes.bool,
  onCoordinatesChange: PropTypes.func,
  countryRestrictions: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.oneOf([undefined]),
  ]),
};
