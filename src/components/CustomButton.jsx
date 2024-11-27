import PropTypes from "prop-types";
import "./customButton.css";

/**
 * CustomButton component.
 *
 * This component represents a button with custom styles
 *
 * @component
 * @example
 * return (
 *   <CustomButton onClick={onClick} >
 *      "title"
 *   </CustomButton>
 * )
 *
 * @param {object} props                      - The component's props.
 * @param {string | object} props.children  - text or icon rendered on a button
 * @param {string} [props.maxSize]              - size max width button.
 * @param {string} [props.type]     - type button.
 * @param {function} props.onClick            - Function you want to give to the button.
 * @returns {JSX.Element} The rendered button with custom styles.
 */

export const CustomButton = ({
  children,
  onClick,
  maxSize = "none",
  type = "button",
}) => {
  const buttonClass = `custom-button ${maxSize !== "none" ? "max-size" : ""}`;
  
  return (
    <button
      className={buttonClass}
      onClick={onClick}
      type={type}
      style={{ "--max-size": maxSize }}
    >
      {children}
    </button>
  );
};

CustomButton.propTypes = {
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.object])
    .isRequired,
  onClick: PropTypes.func,
  maxSize: PropTypes.string,
  type: PropTypes.string,
};
