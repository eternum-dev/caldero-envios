import PropTypes from "prop-types";

/**
 * Printer SVG icon component.
 *
 * This component renders an SVG representing a icon printer.
 * You can adjust the size via props if needed.
 *
 * @component
 * @example  Default use
 *  return (
 *   <PrinterIcon />
 * )
 * @example Custom use
 *  return (
 *   <PrinterIcon width="40" height="40" color="#000000" />
 * )
 *
 * @param {object} props        - The properties object.
 * @param {string} props.width  - The width of the SVG icon.
 * @param {string} props.height - The height of the SVG icon.
 * @param {string} props.color  - The stroke and color of the SVG icon.
 * @returns {JSX.Element} The rendered SVG hamburger icon.
 */

export const PrinterIcon = ({width = "32", height = "32", color = "#000"}) => {
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
          strokeLinecap="round"
          strokeLinejoin="round"
          d="m17 13.01.01-.011M7 17h10M6 10V3.6a.6.6 0 0 1 .6-.6h10.8a.6.6 0 0 1 .6.6V10m3 10.4V14a4 4 0 0 0-4-4H7a4 4 0 0 0-4 4v6.4a.6.6 0 0 0 .6.6h16.8a.6.6 0 0 0 .6-.6"
        ></path>
      </svg>
    </>
  );
};

PrinterIcon.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string,
  color: PropTypes.string,
};
