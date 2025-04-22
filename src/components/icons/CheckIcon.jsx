import PropTypes from "prop-types";

/**
 * CheckIcon SVG icon component.
 *
 * This component generates an SVG that represents check mark with a check or completed symbol.
 * You can adjust the size via props if needed.
 *
 * @component
 * @example  Default use
 *  return (
 *   <CheckIcon />
 * )
 * @example Custom use
 *  return (
 *   <CheckIcon width="40" height="40"  />
 * )
 *
 * @param {object} props        - The properties object.
 * @param {string} props.width  - The width of the SVG icon.
 * @param {string} props.height - The height of the SVG icon.
 * @returns {JSX.Element} The rendered SVG check mark symbol.
 */

export const CheckIcon = ({ width = "32", height = "32" }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      fill="none"
      strokeWidth="1.5"
      color="#000"
      viewBox="0 0 24 24"
      className={`checkicon`}
    >
      <path
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="m7 12.5 3 3 7-7"
      ></path>
      <path
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10"
      ></path>
    </svg>
  );
};

CheckIcon.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string,
};
