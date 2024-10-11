import PropTypes from "prop-types";

/**
 * Hamburger SVG icon component.
 *
 * This component renders an SVG representing a menu hamburger.
 * You can adjust the size via props if needed.
 *
 * @component
 * @example  Default use
 *  return (
 *   <HamburgerIcon />
 * )
 * @example Custom use
 *  return (
 *   <HamburgerIcon width="40" height="40" color="#000000" />
 * )
 *
 * @param {object} props        - The properties object.
 * @param {string} props.width  - The width of the SVG icon.
 * @param {string} props.height - The height of the SVG icon.
 * @param {string} props.color  - The stroke and color of the SVG icon.
 * @returns {JSX.Element} The rendered SVG hamburger icon.
 */

export const HamburgerIcon = ({
  width = "32",
  height = "32",
  color = "#fafafa",
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      fill="none"
      strokeWidth="1.5"
      color={color}
      viewBox="0 0 24 24"
    >
      <path
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3 5h18M3 12h18M3 19h18"
      ></path>
    </svg>
  );
};

HamburgerIcon.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string,
  color: PropTypes.string,
};
