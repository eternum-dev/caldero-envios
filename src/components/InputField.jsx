import PropTypes from "prop-types";
import "./inputField.css";

/**
 * InputField component.
 *
 * This component renders custom input.
 *
 * @component
 * @example
 * return (
 *   <InputField
 *      name={fieldName}
 *      value={inputValue}
 *      onChange={onChange}
 *  />
 * )
 * @param {object} props              - The component's props.
 * @param {string} props.name         - Input fieldname.
 * @param {string} props.type         - Input type.
 * @param {string} props.value        - Input value.
 * @param {Function} props.onChange   - Function that is activated when there is a change.
 * @param {Boolean} props.showError   - Boolean that controls when to display the error.
 * @param {Boolean} props.hiddenLabel - Boolean that controls when to display label text.
 * @param {String} props.placeholder  - Custom text for the input placeholder.
 * @returns {JSX.Element} The rendered custom input.
 */

export const InputField = ({
  name,
  type = "name",
  value,
  onChange,
  placeholder,
  showError,
  hiddenLabel = false,
}) => {
  /**
   * onPlaceholder function.
   *
   * This function is responsible for selecting the placeholder depending on the `type` of input
   *
   * @returns {string}
   */
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
    <label
      htmlFor={name}
      className={`inputfield" ${hiddenLabel && "inputfield__hidden"}`}
    >
      {name}
      <input
        className={`inputfield__box" ${showError && "inputfield__box--error"}`}
        type={type}
        name={name}
        placeholder={(placeholder && placeholder) || onPlaceholder()}
        onChange={onChange}
        value={value}
      />
    </label>
  );
};

InputField.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  showError: PropTypes.bool,
  hiddenLabel: PropTypes.bool,
};
