import PropTypes from "prop-types";
import { Hr } from "./";
import "./divider.css";

/**
 * Divider button component.
 *
 * This component represents divider with a text
 *
 * @component
 * @example
 * return (
 *   <Divider
 *      text={text}
 *   />
 * )
 *
 * @param {object} props        - The component's props.
 * @param {string} props.text   - String with the text to be displayed
 * @returns {JSX.Element} The rendered  divider with a text.
 */

export const Divider = ({ text }) => {
  return (
    <div className="divider">
      <h6 className="divider__txtmuted"> {text} </h6>
      <Hr />
    </div>
  );
};

Divider.propTypes = {
  text: PropTypes.string.isRequired,
};
