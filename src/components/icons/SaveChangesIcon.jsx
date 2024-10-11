import PropTypes from "prop-types";

/**
 * SaveChangesIcon SVG icon component.
 *
 * This component renders an SVG representing a floppy disk.
 * You can adjust the size via props if needed.
 *
 * @component
 * @example  Default use
 *  return (
 *    <SaveChangesIcon />
 * )
 * @example Custom use
 *  return (
 *   <SaveChangesIcon width="40" height="40" color="#000000" />
 * )
 *
 * @param {object} props        - The properties object.
 * @param {string} props.width  - The width of the SVG icon.
 * @param {string} props.height - The height of the SVG icon.
 * @param {string} props.color  - The stroke and color of the SVG icon.
 * @returns {JSX.Element} The rendered SVG  floppy disk icon.
 */

export const SaveChangesIcon = ({
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
        d="M3 19V5a2 2 0 012-2h11.172a2 2 0 011.414.586l2.828 2.828A2 2 0 0121 7.828V19a2 2 0 01-2 2H5a2 2 0 01-2-2z"
      ></path>
      <path
        stroke={color}
        d="M8.6 9h6.8a.6.6 0 00.6-.6V3.6a.6.6 0 00-.6-.6H8.6a.6.6 0 00-.6.6v4.8a.6.6 0 00.6.6zM6 13.6V21h12v-7.4a.6.6 0 00-.6-.6H6.6a.6.6 0 00-.6.6z"
      ></path>
    </svg>
  );
};

SaveChangesIcon.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string,
  color: PropTypes.string,
};
