import PropTypes from "prop-types";
import { useMyDirectionService } from "../helpers";

export const Direction = ({ localCordinates }) => {
  const { resetMap } = useMyDirectionService({ localCordinates });

  return (
    <div className="directions">
      <button onClick={resetMap}> reset</button>
    </div>
  );
};

Direction.propTypes = {
  localCordinates: PropTypes.any,
};
