import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { linkModalData } from "../data/components";
import "./linkModal.css";

export const LinkModal = ({ children = "", icon }) => {
  const path = children.toLowerCase().replace(" ", "-");
  const { initalPath } = linkModalData;

  return (
    <Link className="linkmodal" to={`${initalPath + path}`}>
      {icon}
      {children}
    </Link>
  );
};

LinkModal.propTypes = {
  children: PropTypes.string.isRequired,
  icon: PropTypes.element.isRequired,
};
