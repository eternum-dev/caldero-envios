import PropTypes from "prop-types";

/**
 * SettingsUserIcon SVG icon component.
 *
 * This component renders an SVG representing a circular user icon .
 * You can adjust the size via props if needed.
 *
 * @component
 * @example  Default use
 *  return (
 *    <SettingsUserIcon />
 * )
 * @example Custom use
 *  return (
 *   <SettingsUserIcon width="32" height="32" color="#000000"  />
 * )
 *
 * @param {object} props        - The properties object.
 * @param {string} props.width  - The width of the SVG icon.
 * @param {string} props.height - The height of the SVG icon.
 * @param {string} props.color  - The stroke and color of the SVG icon.
 * @returns {JSX.Element} The rendered SVG circular user icon.
 */

export const SettingsUserIcon = ({
  width = "40",
  height = "40",
  color = "#ff8b8b",
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
        d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2z"
      ></path>
      <path
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M4.271 18.346S6.5 15.5 12 15.5s7.73 2.846 7.73 2.846M12 12a3 3 0 100-6 3 3 0 000 6z"
      ></path>
    </svg>
  );
};

SettingsUserIcon.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string,
  color: PropTypes.string,
};
