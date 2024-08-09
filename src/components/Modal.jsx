import PropTypes from "prop-types";
import "./modal.css";

export const Modal = ({ children, toggleModal, icon, showModal = false }) => {
  return (
    <div className="modal">
      <button onClick={toggleModal}>{icon}</button>
      {showModal && (
        <div className="modal__wrapper">
          <>{children}</>
        </div>
      )}
    </div>
  );
};
Modal.propTypes = {
  children: PropTypes.any.isRequired,
  toggleModal: PropTypes.func.isRequired,
  icon: PropTypes.element.isRequired,
  showModal: PropTypes.bool,
};
