import PropTypes from "prop-types";
import { useMyDirectionService } from "../helpers";
import { CloseButton } from "./CloseButton";

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
 * @param {string | number} props.localCordinates.lat  - String or number containing the latitude.
 * @param {string | number} props.localCordinates.lng  - String or number containing the longitude.
 * @returns {JSX.Element} The rendered button of restar map .
 */

export const Direction = ({ localCordinates }) => {
  const { resetMap } = useMyDirectionService({ localCordinates });

  return (
    <div className="directions">
      <CloseButton onClick={resetMap} />
    </div>
  );
};

Direction.propTypes = {
  localCordinates: PropTypes.shape({
    lat: PropTypes.oneOfType([PropTypes.string | PropTypes.number]),
    lng: PropTypes.oneOfType([PropTypes.string | PropTypes.number]),
  }).isRequired,
};
