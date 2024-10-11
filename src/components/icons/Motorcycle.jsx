import PropTypes from "prop-types";

/**
 * Motorcycle SVG icon component.
 *
 * This component renders an SVG representing a motorcycle of deliveryman.
 * You can adjust the size via props if needed.
 *
 * @component
 * @example  Default use
 *  return (
 *    <Motorcycle />
 * )
 * @example Custom use
 *  return (
 *   <Motorcycle width="40" height="40" color="#000000" />
 * )
 *
 * @param {object} props        - The properties object.
 * @param {string} props.width  - The width of the SVG icon.
 * @param {string} props.height - The height of the SVG icon.
 * @param {string} props.color  - The stroke and color of the SVG icon.
 * @returns {JSX.Element} The rendered SVG Motorcycle icon.
 */

export const Motorcycle = ({
  width = "24",
  height = "24",
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
        d="M5 19a4 4 0 100-8 4 4 0 000 8zM19 15l-3-9 1-1"
      ></path>
      <path
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M16 8.5h-4.5l-4.5 3M5.5 15.5H12l1-2.5 3.5-4.5M8.5 10c-2-1.5-5-1.5-7 0M19 19a4 4 0 100-8 4 4 0 000 8z"
      ></path>
    </svg>
  );
};

Motorcycle.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string,
  color: PropTypes.string,
};
