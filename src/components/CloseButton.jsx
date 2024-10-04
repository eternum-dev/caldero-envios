import { CloseIcon } from "./icons";
import PropTypes from "prop-types";
import "./closeButton.css";

export const CloseButton = ({ onClick }) => {
  return (
    <button className="closeButton" onClick={onClick}>
      <CloseIcon />
    </button>
  );
};

CloseButton.propTypes = {
  onClick: PropTypes.func.isRequired,
};
