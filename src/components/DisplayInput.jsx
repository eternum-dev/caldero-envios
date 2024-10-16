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

  const handleEditInput = (event) => {
    event.preventDefault();

    if (isEditing) {
      setInputValue(currentValue, fieldName);
    }
    setisEditing((prev) => !prev);
  };

  return (
    <label className="displayinput">
      {fieldName}
      {isEditing ? (
        <input
          className="displayinput__inp"
          type="text"
          size={10}
          value={currentValue}
          onChange={(event) => setcurrentValue(event.target.value)}
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
