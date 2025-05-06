import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import "./displayInput.css";
import { EditIcon, SaveChangesIcon } from "./icons";
import { stringCapitalization } from "../helpers/utils/stringUtils";

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
 * @param {string} props.minLength       - Minimum number of characters required to save.
 * @param {boolean} [props.showError] - Indicates whether to show an error animation or message.
 * @returns {JSX.Element} The rendered read-only or editable input.
 */

export const DisplayInput = ({
  value,
  setInputValue,
  fieldName,
  minLength = 3,
  showError,
}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [currentValue, setCurrentValue] = useState(value);
  const [localError, setLocalError] = useState(null);

  const handleEditInput = (event) => {
    event.preventDefault();
    setIsEditing((prev) => !prev);
    if (!isEditing) {
      setLocalError(null);

      return;
    }

    if (!currentValue || currentValue.length < minLength) {
      setLocalError(`Debe tener al menos ${minLength} caracteres`);
      return;
    }
    setInputValue(currentValue, fieldName);
  };

  useEffect(() => {
    if (localError) {
      const t = setTimeout(() => setLocalError(null), 1500);
      return () => clearTimeout(t);
    }
  }, [localError]);

  useEffect(() => {
    if (value !== currentValue) {
      setCurrentValue(value);
    }
  }, [value]);

  const errorMessage = localError || showError;

  return (
    <label className="displayinput">
      {stringCapitalization(fieldName)}
      <div
        className={`displayinput__container ${
          errorMessage ? "error-animation" : ""
        }`}
      >
        {isEditing ? (
          <input
            className="displayinput__inp"
            type="text"
            size={10}
            value={currentValue}
            onChange={(e) => {
              setCurrentValue(e.target.value);
              setLocalError(null);
            }}
            name={fieldName}
          />
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
      </div>

      {errorMessage && <p className="displayinput__error-text">{localError}</p>}
    </label>
  );
};

DisplayInput.propTypes = {
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  fieldName: PropTypes.string.isRequired,
  setInputValue: PropTypes.func.isRequired,
  showError: PropTypes.bool,
  minLength: PropTypes.number,
};
