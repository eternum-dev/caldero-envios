import PropTypes from "prop-types";
import { Loader } from "./icons/Loader";
import "./resultLoader.css";

/**
 * Show a loader while waiting for the response when saving to the database.
 * @component
 * @example
 *  const [message, setMessage] = useState("");
 *  const closeLoaderModal = () => { console.log("closeLoaderModal") }
 *  return (
 *    <ResultLoaderModal
 *      message={message}
 *      closeLoaderModal={closeLoaderModal}
 *    />
 *  )
 *
 * @param {Object} props
 * @param {string} props.message show server response.
 * @param {Function} props.closeLoaderModal  function that closes the modal.
 * @returns {JSX.Element} react element with result loader.
 */
export const ResultLoaderModal = ({ message = "", closeLoaderModal }) => {
  return (
    <div className="resultloader">
      <h4 className="resultloader__title">
        {!message ? "Actualizando" : "Resultado"}
      </h4>
      <button
        className="ressultLoader__close"
        onClick={() => closeLoaderModal(false)}
      >
        x
      </button>
      {message ? (
        <p className="resultloader__message">{message}</p>
      ) : (
        <Loader />
      )}
    </div>
  );
};

ResultLoaderModal.propTypes = {
  message: PropTypes.string.isRequired,
  closeLoaderModal: PropTypes.func.isRequired,
};
