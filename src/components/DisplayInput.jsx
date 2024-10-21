import { useState } from "react";
import PropTypes from "prop-types";
import "./displayInput.css";
import { EditIcon, SaveChangesIcon } from "./icons";

/**
 * DisplayInput button component.
 *
 * This component represents input with editable or read-only state.
 *
 * @component
 * @example
 * return (
 *   <DisplayInput
 *      value={value}
 *      setInputValue={setInputValue}
 *      fieldName={fieldName}
 *   />
 * )
 *
 * @param {object} props                 - The component's props.
 * @param {string | number} props.value  - Value input.
 * @param {Function} props.setInputValue - Function that sets the values in the state.
 * @param {string} props.fieldName       - Field name to be changed in the state.
 * @returns {JSX.Element} The rendered read-only or editable input.
 */

export const DisplayInput = ({ value, setInputValue, fieldName }) => {
  const [isEditing, setisEditing] = useState(false);
  const [currentValue, setcurrentValue] = useState(value);
  const [errorCurrentValue, setErrorCurrentValue] = useState(null);

  const handleEditInput = (event) => {
    event.preventDefault();

    if (isEditing) {
      setInputValue(currentValue, fieldName);
      if (!currentValue || currentValue.length <= 4) {
        setErrorCurrentValue(true);

        setTimeout(() => {
          setErrorCurrentValue(false);
        }, 1500);
        return;
      }
    }
    setErrorCurrentValue(false);
    setisEditing((prev) => !prev);
  };

  return (
    <label
      className={`displayinput ${errorCurrentValue && "error-animation"}`}
      style={{
        border: !isEditing && !currentValue && "1px solid  var(--red-300)",
      }}
    >
      {fieldName}
      {isEditing ? (
        <input
          className="displayinput__inp"
          type="text"
          size={10}
          value={currentValue}
          onChange={(event) => {
            setcurrentValue(event.target.value);
            setErrorCurrentValue(false);
          }}
        ></input>
      ) : (
        <span className="displayinput__readinp">{currentValue}</span>
      )}
      <button
        className={`displayinput__btn ${
          !isEditing && "displayinput__btn--editing"
        }`}
        onClick={handleEditInput}
      >
        {isEditing ? <SaveChangesIcon /> : <EditIcon />}
      </button>
    </label>
  );
};

DisplayInput.propTypes = {
  value: PropTypes.oneOfType([
    PropTypes.string.isRequired,
    PropTypes.number.isRequired,
  ]),
  fieldName: PropTypes.string.isRequired,
  setInputValue: PropTypes.func.isRequired,
};
