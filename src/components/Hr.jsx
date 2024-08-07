import PropTypes from "prop-types";
import "./hr.css";

export const Hr = ({ size = "2px", justify = "end" }) => {
  return (
    <div
      className="hr"
      style={{
        justifySelf: justify,
        height: size,
      }}
    ></div>
  );
};

Hr.propTypes = {
  size: PropTypes.string,
  justify: PropTypes.string,
};
