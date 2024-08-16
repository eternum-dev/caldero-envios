import PropTypes from "prop-types";
import "./modal.css";

export const Modal = ({
  children,
  toggleModal,
  triggerContent,
  showModal = false,
  styleButton = false,
}) => {
  return (
    <div className="modal">
      <button
        className={`${styleButton && "modal__toggle"}`}
        onClick={toggleModal}
      >
        {triggerContent}
      </button>
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
  triggerContent: PropTypes.oneOfType([PropTypes.element, PropTypes.string])
    .isRequired,
  showModal: PropTypes.bool,
  styleButton: PropTypes.bool,
};
