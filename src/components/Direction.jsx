import PropTypes from "prop-types";
import { useMyDirectionService } from "../helpers";
import { buttonReset } from "../data";

/**
 * Direction button component.
 *
 * This component represents a button that restores the map to the initial position.
 *
 * @component
 * @example
 * return (
 *   <Direction localCordinates={localCordinates} />
 * )
 *
 * @param {object} props                      - The component's props.
 * @param {object} props.localCordinates      - Object that contains the coordinates of a location.
 * @param {string} props.localCordinates.lat  - String containing the latitude.
 * @param {string} props.localCordinates.lng  - String containing the longitude.
 * @returns {JSX.Element} The rendered button of restar map .
 */

export const Direction = ({ localCordinates }) => {
  const { resetMap } = useMyDirectionService({ localCordinates });

  return (
    <div className="directions">
      <button onClick={resetMap}>{buttonReset}</button>
    </div>
  );
};

Direction.propTypes = {
  localCordinates: PropTypes.shape({
    lat: PropTypes.string,
    lng: PropTypes.string,
  }).isRequired,
};
