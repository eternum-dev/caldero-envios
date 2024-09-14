import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "./linkModal.css";

export const LinkModal = ({ children = "", icon }) => {
  const path = children.toLowerCase().replace(" ", "-");

  return (
    <Link className="linkmodal" to={`/configuracion/${path}`}>
      {icon}
      {children}
    </Link>
  );
};

LinkModal.propTypes = {
  children: PropTypes.string.isRequired,
  icon: PropTypes.element.isRequired,
};
