import { CloseIcon } from "./icons";
import PropTypes from "prop-types";
import "./closeButton.css";

export const CloseButton = ({ onCLick }) => {
  return (
    <button 
    className="closeButton"
    onClick={onCLick}>
      <CloseIcon />
    </button>
  );
};

CloseButton.propTypes = {
  onCLick: PropTypes.func.isRequired,
};
