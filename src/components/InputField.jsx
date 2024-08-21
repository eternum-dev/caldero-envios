import PropTypes from "prop-types";

export const InputField = ({ name, type = "name", value, onChange }) => {
  const onPlaceholder = () => {
    switch (type) {
      case "pais":
        return "Chile";
      case "name":
        return "alejandro thon";

      case "email":
        return "tu.email@gmail.com";

      case "password":
        return "********";

      default:
        return "alejandro thon";
    }
  };

  return (
    <label htmlFor={name} className="login__label">
      {name}
      <input
        className="login__input"
        type={type}
        name={name}
        placeholder={onPlaceholder()}
        onChange={onChange}
        value={value}
      />
    </label>
  );
};

InputField.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
