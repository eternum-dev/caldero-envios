import { useRef } from "react";
import { UploadIcon } from "./icons";
import PropTypes from "prop-types";
import { profileUploaderImage } from "../data";
import "./uploaderImage.css";

/**
 * UploaderImage component for uploading images.
 * @component
 *
 * @example
 * return(
 *    <UploaderImage
 *       handleImageChange={handleImageChange}
 *       setPicture={setPicture}
 *    />
 * )
 * @param {Object} props
 * @param {Function} props.handleImageChange reads a  selected image file and updates the state with the image
 * @param {Function} props.setPicture  update image state.
 * @returns {JSX.Element} an input file component for uploading images.
 */

export const UploaderImage = ({ handleImageChange, setPicture }) => {
  const inputRef = useRef();
  const { button } = profileUploaderImage;

  const choseFile = (event) => {
    event.preventDefault();
    inputRef.current.click();
  };

  return (
    <div className="uploader-image">
      <input
        type="file"
        className="uploader-image__input"
        accept="image/*"
        ref={inputRef}
        onChange={(event) => handleImageChange(event, setPicture)}
      />
      <button className="uploader-image__btn" onClick={choseFile}>
        <UploadIcon />
        {button}
      </button>
    </div>
  );
};

UploaderImage.propTypes = {
  handleImageChange: PropTypes.func.isRequired,
  setPicture: PropTypes.func.isRequired,
};
