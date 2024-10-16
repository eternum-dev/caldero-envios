import { useContext } from "react";
import PropTypes from "prop-types";
import { calculateValueRute } from "../helpers";
import { MapContext } from "../context";
import "./resultRoute.css";
import { mapRoute } from "../data";

export const MapRoute = ({ children }) => {
  let newDistance, newDuration, newEnd_address, value;

  const { dataRoute } = useContext(MapContext);
  const { loading, paragraph } = mapRoute;

  try {
    if (dataRoute.length > 0) {
      const { legs } = dataRoute[0];
      const { distance, duration, end_address } = legs[0];

      newDistance = distance;
      newDuration = duration;
      newEnd_address = end_address;
    }
  } catch (error) {
    console.log(error);
  }

  if (newDistance) {
    value = calculateValueRute(newDistance.value);
  }

  return (
    <div className="result-route">
      {!dataRoute.length > 0 ? (
        <h3>{loading}</h3>
      ) : (
        <div className="result-route__wrapper">
          <h3 className="result-route__h3">
            {paragraph.direction}
            <span className="result-route__span">{newEnd_address}</span>
          </h3>
          <p className="result-route__p">
            {paragraph.time}
            <span className="result-route__span">${newDuration.text}</span>
          </p>
          <p className="result-route__p">
            {paragraph.distance}
            <span className="result-route__span">${newDistance.text}</span>
          </p>
          <h4 className="result-route__h4">
            {paragraph.value}
            <span className="result-route__span">${value}</span>
          </h4>
        </div>
      )}
      <div className="button-reset">{children}</div>
    </div>
  );
};

MapRoute.propTypes = {
  children: PropTypes.string.isRequired,
};
