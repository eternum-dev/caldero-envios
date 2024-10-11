import PropTypes from "prop-types";

/**
 * CloseIcon SVG icon component.
 *
 * This component renders an SVG representing a x.
 * You can adjust the size via props if needed.
 *
 * @component
 * @example  Default use
 *  return (
 *   <CloseIcon />
 * )
 *
 * @param {object} props        - The properties object.
 * @param {string} props.width  - The width of the SVG icon.
 * @param {string} props.height - The height of the SVG icon.
 * @returns {JSX.Element} The rendered SVG X icon.
 */

export const CloseIcon = ({ width = "32", height = "32" }) => {
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
        stroke="#ccc"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M6.758 17.243L12.001 12m5.243-5.243L12 12m0 0L6.758 6.757M12.001 12l5.243 5.243"
      ></path>
    </svg>
  );
};

CloseIcon.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string,
};