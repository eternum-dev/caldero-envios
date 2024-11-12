import PropTypes from "prop-types";

/**
 * AddAddress SVG icon component.
 *
 * This component renders an SVG representing a marker with addition symbol.
 * You can adjust the size via props if needed.
 *
 * @component
 * @example  Default use
 *  return (
 *   <AddLocationIcon />
 * )
 * @example Custom use
 *  return (
 *   <AddLocationIcon width="40" height="40" color="#000000" />
 * )
 *
 * @param {object} props        - The properties object.
 * @param {string} props.width  - The width of the SVG icon.
 * @param {string} props.height - The height of the SVG icon.
 * @param {string} props.color  - The stroke and color of the SVG icon.
 * @returns {JSX.Element} The rendered SVG marker with addition symbol icon.
 */

export const AddLocationIcon = ({
  width = "32",
  height = "32",
  color = "#000",
}) => {
  
  return (
    <>
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
          d="M16 9.2C16 13.177 9 20 9 20S2 13.177 2 9.2C2 5.224 5.134 2 9 2s7 3.224 7 7.2Z"
        ></path>
        <path
          fill={color}
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9 10a1 1 0 1 0 0-2 1 1 0 0 0 0 2"
        ></path>
        <path
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M16 19h3m3 0h-3m0 0v-3m0 3v3"
        ></path>
      </svg>
    </>
  );
};

AddLocationIcon.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string,
  color: PropTypes.string,
};
