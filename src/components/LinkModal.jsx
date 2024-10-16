import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { linkModalData } from "../data/components";
import "./linkModal.css";

/**
 * LinkModal  component.
 *
 * This component represents link with text and icon.
 *
 * @component
 * @example
 * return (
 *   <LinkModal
 *      icon={<HamburgerIcon/>}>
 *    {text}
 *   </LinkModal>
 * )
 *
 * @param {object} props            - The component's props.
 * @param {string} props.children   - text  rendered on a link.
 * @param {Element} props.icon       - icon  rendered on a link.
 * @returns {JSX.Element} The rendered link with text and icon.
 */

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
