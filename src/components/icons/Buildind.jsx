import PropTypes from "prop-types";

/**
 * Building SVG icon component.
 *
 * This component renders an SVG representing a building.
 * You can adjust the size and color via props if needed.
 *
 * @component
 * @example  Default use
 *  return (
 *   <Building />
 * )
 * @example Custom use
 * return (
 *   <Building width="40" height="40" color="#000000" />
 * )
 *
 * @param {object} props        - The properties object.
 * @param {string} props.width  - The width of the SVG icon.
 * @param {string} props.height - The height of the SVG icon.
 * @param {string} props.color  - The stroke color of the SVG icon.
 * @returns {JSX.Element} The rendered SVG building icon.
 */

export const Building = ({
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
      <path stroke={color} d="M3 10v9a2 2 0 002 2h14a2 2 0 002-2v-9"></path>
      <path
        stroke={color}
        strokeMiterlimit="16"
        d="M14.833 21v-6a2 2 0 00-2-2h-2a2 2 0 00-2 2v6"
      ></path>
      <path
        stroke={color}
        d="M21.818 9.364l-1.694-5.929A.6.6 0 0019.547 3H15.5l.475 5.704a.578.578 0 00.278.45c.39.233 1.152.663 1.747.846 1.016.313 2.5.2 3.346.096a.57.57 0 00.472-.732z"
      ></path>
      <path
        stroke={color}
        d="M14 10c.568-.175 1.288-.574 1.69-.812a.578.578 0 00.28-.549L15.5 3h-7l-.47 5.639a.578.578 0 00.28.55c.402.237 1.122.636 1.69.811 1.493.46 2.507.46 4 0z"
      ></path>
      <path
        stroke={color}
        d="M3.876 3.435l-1.694 5.93a.57.57 0 00.472.73c.845.105 2.33.217 3.346-.095.595-.183 1.358-.613 1.747-.845a.578.578 0 00.278-.451L8.5 3H4.453a.6.6 0 00-.577.435z"
      ></path>
    </svg>
  );
};

Building.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string,
  color: PropTypes.string,
};
