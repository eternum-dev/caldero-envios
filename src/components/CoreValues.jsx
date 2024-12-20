import "./coreValues.css";
import PropTypes from "prop-types";

export const CoreValues = ({ src = "image.png" }) => {
  return (
    <div className="core-values">
      <img src={src} alt="seguridad" className="" />
      <h5>titulo</h5>
    </div>
  );
};

CoreValues.propTypes = {
  src: PropTypes.string,
};
