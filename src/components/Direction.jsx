import PropTypes from "prop-types";
import { useMyDirectionService } from "../helpers";
import { buttonReset } from "../data";

export const Direction = ({ localCordinates }) => {
  const { resetMap } = useMyDirectionService({ localCordinates });

  return (
    <div className="directions">
      <button onClick={resetMap}>{buttonReset}</button>
    </div>
  );
};

Direction.propTypes = {
  localCordinates: PropTypes.any,
};
