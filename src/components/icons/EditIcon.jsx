import PropTypes from "prop-types";

/**
 * EditICon SVG icon component.
 *
 * This component renders an SVG representing a pencil of edit.
 * You can adjust the size and color via props if needed.
 *
 * @component
 * @example  Default use
 *  return (
 *   <EditIcon />
 * )
 * @example Custom use
 * return (
 *   <EditIcon width="40" height="40" color="#000000" />
 * )
 *
 * @param {Object} props        - The properties object.
 * @param {string} props.width  - The width of the SVG icon.
 * @param {string} props.height - The height of the SVG icon.
 * @param {string} props.color  - The stroke color of the SVG icon.
 * @returns {JSX.Element} The rendered SVG pencil icon.
 */

export const EditIcon = ({
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
      color="#000"
      viewBox="0 0 24 24"
    >
      <path
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3 21h18M12.222 5.828L15.05 3 20 7.95l-2.828 2.828m-4.95-4.95l-5.607 5.607a1 1 0 00-.293.707v4.536h4.536a1 1 0 00.707-.293l5.607-5.607m-4.95-4.95l4.95 4.95"
      ></path>
    </svg>
  );
};

EditIcon.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string,
  color: PropTypes.string,
};
