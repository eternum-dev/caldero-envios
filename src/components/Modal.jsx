import PropTypes from "prop-types";
import "./modal.css";
import { CloseIcon } from "./icons/CloseIcon";

export const Modal = ({
  children,
  toggleModal,
  triggerContent,
  showModal = false,
  styleButton = false,
  title,
}) => {
  const onCloseModal = (event) => {
    event.preventDefault();
    toggleModal(false);
  };

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
          <>
            <header>
              <h3>{title}</h3>
              <button onClick={onCloseModal}>
                <CloseIcon />
              </button>
            </header>

            {children}
          </>
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
  title: PropTypes.string.isRequired,
};
