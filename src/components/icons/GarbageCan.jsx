import PropTypes from "prop-types";

/**
 * GarbageCan SVG icon component.
 *
 * This component renders an SVG representing a Garbage Can.
 * You can adjust the size via props if needed.
 *
 * @component
 * @example  Default use
 *  return (
 *   <GarbageCan />
 * )
 * @example Custom use
 *  return (
 *   <GarbageCan width="40" height="40" color="#000000" />
 * )
 *
 * @param {object} props        - The properties object.
 * @param {string} props.width  - The width of the SVG icon.
 * @param {string} props.height - The height of the SVG icon.
 * @param {string} props.color  - The stroke and color of the SVG icon.
 * @returns {JSX.Element} The rendered SVG garbage can icon.
 */

export const GarbageCan = ({ width = "32", height = "32", color = "#000" }) => {
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
        d="M8.992 13h6"
      ></path>
      <path
        stroke={color}
        d="M3.04 4.294a.496.496 0 01.191-.479C3.927 3.32 6.314 2 12 2s8.073 1.32 8.769 1.815a.496.496 0 01.192.479l-1.7 12.744a4 4 0 01-1.98 2.944l-.32.183a10 10 0 01-9.922 0l-.32-.183a4 4 0 01-1.98-2.944l-1.7-12.744zM3 5c2.571 2.667 15.429 2.667 18 0"
      ></path>
    </svg>
  );
};

GarbageCan.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string,
  color: PropTypes.string,
};