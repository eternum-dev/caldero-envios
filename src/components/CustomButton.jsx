import PropTypes from "prop-types";
import "./customButton.css";

export const CustomButton = ({ children, onClick, size = "none" }) => {
  return (
    <button
      className="custom-button"
      onClick={onClick}
      style={{ maxWidth: size, margin: `${size !== "none" ? "auto" : ""} ` }}
    >
      {children}
    </button>
  );
};

CustomButton.propTypes = {
  children: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  size: PropTypes.string,
};
