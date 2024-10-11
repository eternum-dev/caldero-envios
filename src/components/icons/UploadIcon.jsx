import PropTypes from "prop-types";

/**
 * UploadIcon SVG icon component.
 *
 * This component renders an SVG representing a arrow up.
 * You can adjust the size via props if needed.
 *
 * @component
 * @example  Default use
 *  return (
 *    <UploadIcon />
 * )
 * @example Custom use
 *  return (
 *   <UploadIcon width="40" height="40" color="#000000"  />
 * )
 *
 * @param {object} props        - The properties object.
 * @param {string} props.width  - The width of the SVG icon.
 * @param {string} props.height - The height of the SVG icon.
 * @param {string} props.color  - The stroke and color of the SVG icon.
 * @returns {JSX.Element} The rendered SVG upload icon.
 */

export const UploadIcon = ({
  width = "32",
  height = "32",
  color = "#ffdada",
}) => {
  return (
    <div className="upload-icon">
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
          stroke="#000"
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M6 20h12M12 16V4m0 0l3.5 3.5M12 4L8.5 7.5"
        ></path>
      </svg>
    </div>
  );
};

UploadIcon.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string,
  color: PropTypes.string,
};
