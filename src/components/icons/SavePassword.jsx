import PropTypes from "prop-types";

/**
 * SavePassword SVG icon component.
 *
 * This component renders an SVG representing save changes.
 * You can adjust the size via props if needed.
 *
 * @component
 * @example  Default use
 *  return (
 *    <SavePassword />
 * )
 * @example Custom use
 *  return (
 *   <SavePassword width="40" height="40" color="#000000" />
 * )
 *
 * @param {object} props        - The properties object.
 * @param {string} props.width  - The width of the SVG icon.
 * @param {string} props.height - The height of the SVG icon.
 * @param {string} props.color  - The stroke and color of the SVG icon.
 * @returns {JSX.Element} The rendered SVG save changes icon.
 */

export const SavePassword = ({
  width = "24",
  height = "24",
  color = "#fee",
}) => {
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
        strokeLinejoin="round"
        d="M21 6v5a9 9 0 11-18 0V6a2 2 0 012-2h14a2 2 0 012 2z"
      ></path>
      <path
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M8 10l4 4 4-4"
      ></path>
    </svg>
  );
};

SavePassword.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string,
  color: PropTypes.string,
};
