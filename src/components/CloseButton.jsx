import { CloseIcon } from "./icons";
import PropTypes from "prop-types";
import "./closeButton.css";

/**
 * CloseButton component.
 *
 * This component renders a button with X icon.
 *
 * @component
 * @example
 * return (
 *   <CloseButton onClick={onClick} />
 * )
 *
 * @param {object} props            - The component's props.
 * @param {function} props.onClick  - Function to toggle the modal state or delete row item in state .
 * @returns {JSX.Element} The rendered button with x icon.
 */

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
