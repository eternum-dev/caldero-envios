import { useState } from "react";
// import { useAutocomplete } from "@vis.gl/react-google-maps";
import PropTypes from "prop-types";
import "./inputAutoComplete.css";
import { SearchBox } from "@mapbox/search-js-react";

const apiKeyMapbox = import.meta.env.VITE_MAPBOX_TOKEN;

/**
 * InputAutoComplete component.
 *
 * This component renders an input field with autocomplete functionality using Mapbox Places API.
 *
 * When the user selects a location, it extracts the coordinates and passes them via `onCoordinatesChange`.
 *
 * @component
 * @example
 * return (
 *   <InputAutoComplete
 *     onCoordinatesChange={(coords) => console.log(coords)}
 *     countryRestrictions="cl"
 *   />
 * )
 *
 * @param {Object} props
 * @param {Function} props.onCoordinatesChange - Callback to handle coordinates after place selection.
 * @param {string} [props.countryRestrictions] - Optional country code (e.g., "cl") to restrict the search.
 * @returns {JSX.Element}
 */

export const InputAutoComplete = ({
  inputRef,
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
        ref={inputRef}
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
  onCoordinatesChange: PropTypes.func.isRequired,
  countryRestrictions: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.oneOf([undefined]),
  ]).isRequired,
};
