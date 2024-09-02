import PropTypes from "prop-types";
import { Hr } from "./";
import "./divider.css";

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
