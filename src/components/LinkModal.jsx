import PropTypes from "prop-types";
import "./linkModal.css";
import { Link } from "react-router-dom";

export const LinkModal = ({ children = "", icon }) => {
  const path = children.toLowerCase().replace(" ", "-");

  console.log(path);

  return (
    <Link className="linkmodal" to={`/setting/${path}`}>
      {icon}
      {children}
    </Link>
  );
};

LinkModal.propTypes = {
  children: PropTypes.string.isRequired,
  icon: PropTypes.element.isRequired,
};
