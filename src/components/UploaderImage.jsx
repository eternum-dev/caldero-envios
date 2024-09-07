import { useRef } from "react";
import { UploadIcon } from "./icons";
import PropTypes from "prop-types";
import "./uploaderImage.css"; 

/**
 * UploaderImage component for uploading images.
 * @component
 *
 * @param {Object} props
 * @param {Function} props.handleImageChange reads a  selected image file and updates the state with the image
 * @param {Function} props.setPicture  update image state.
 * @returns {JSX.Element} an input file component for uploading images.
 *
 * @example
 * const [picture, setPicture] = useState("");
 * const handleImageChange = (event, setPicture) => { console.log(event, setPicture) }
 *
 * return(
 *    <UploaderImage
 *       handleImageChange={handleImageChange}
 *       setPicture={setPicture}
 *    />
 * )
 */
export const UploaderImage = ({ handleImageChange, setPicture }) => {
  const inputRef = useRef();

  const choseFile = (event) => {
    event.preventDefault();
    inputRef.current.click();
  };

  return (
    <div className="uploader-image">
      <input
        type="file"
        className="uploader-image__input"
        accept="images"
        ref={inputRef}
        onChange={(event) => handleImageChange(event, setPicture)}
      />
      <button className="uploader-image__btn" onClick={choseFile}>
        <UploadIcon />
        Subir Foto
      </button>
    </div>
  );
};

UploaderImage.propTypes = {
  handleImageChange: PropTypes.func.isRequired,
  setPicture: PropTypes.func.isRequired,
};
