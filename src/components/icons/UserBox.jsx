import PropTypes from "prop-types";

/**
 * UserBox SVG icon component.
 *
 * This component renders an SVG representing a square user icon .
 * You can adjust the size via props if needed.
 *
 * @component
 * @example  Default use
 *  return (
 *    <UserBox />
 * )
 * @example Custom use
 *  return (
 *   <UserBox width="32" height="32" color="#000000"  />
 * )
 *
 * @param {object} props        - The properties object.
 * @param {string} props.width  - The width of the SVG icon.
 * @param {string} props.height - The height of the SVG icon.
 * @param {string} props.color  - The stroke and color of the SVG icon.
 * @returns {JSX.Element} The rendered SVG square user icon.
 */

export const UserBox = ({ width = "24", height = "24", color = "#fee" }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      fill="none"
      strokeWidth="1.4"
      color={color}
      viewBox="0 0 24 24"
    >
      <path
        stroke={color}
        strokeLinecap="round"
        d="M7 18v-1a5 5 0 015-5v0a5 5 0 015 5v1"
      ></path>
      <path
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 12a3 3 0 100-6 3 3 0 000 6z"
      ></path>
      <path
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M21 3.6v16.8a.6.6 0 01-.6.6H3.6a.6.6 0 01-.6-.6V3.6a.6.6 0 01.6-.6h16.8a.6.6 0 01.6.6z"
      ></path>
    </svg>
  );
};

UserBox.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string,
  color: PropTypes.string,
};
