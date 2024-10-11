import PropTypes from "prop-types";
import "./customButton.css";

export const CustomButton = ({
  children,
  onClick,
  size = "none",
  type = "button",
}) => {
  return (
    <button
      className="custom-button"
      onClick={onClick}
      type={type}
      style={{
        maxWidth: size,
        margin: `${size !== "none" ? "auto" : ""} `,
      }}
    >
      {children}
    </button>
  );
};

CustomButton.propTypes = {
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.object])
    .isRequired,
  onClick: PropTypes.func,
  size: PropTypes.string,
  type: PropTypes.string,
};
