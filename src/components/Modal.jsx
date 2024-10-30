import PropTypes from "prop-types";
import "./modal.css";
import { CloseIcon } from "./icons/CloseIcon";
import { Hr } from "./Hr";

/**
 * Modal component renders a button that when clicked opens a box with the children of the component.
 *
 * @component
 * @example
 *
 *  return (
 *    <Modal
 *        toggleModal={toggleModal}
 *        triggerContent={<icon/>}
 *        showModal={showModal}
 *        styleButton={true}
 *        title={"titulo"}
 *        borderError={borderErrorState},
 *      >
 *      <div>
 *         <h3>titulo</h3>
 *         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, quod.</p>
 *      </div>
 *    </Modal>
 *  )
 *
 * @param {object}   props                - The component's props.
 * @param {JSX.Element} props.children    - Contains the elements that a component wraps.
 * @param {Function} props.toggleModal    - Content that will be displayed inside the button.
 * @param {string | element} props.triggerContent - Function to save the current state changes to the database.
 * @param {boolean}  props.showModal      - Boolean response whether to show the modal.
 * @param {boolean}  props.styleButton    - Boolean response  if the button has the `toogle__modal` class.
 * @param {string}   props.title          - Title that is rendered in the header of the modal.
 * @param {boolean}  props.borderError    - Boolean response to show border type error.
 * @param {boolean}  props.isRelative     - Boolean response
 * @param {string}   props.top            - Boolean response
 * @param {string}   props.right          - Boolean response
 * @param {string}   props.botoom         - Boolean response
 * @param {string}   props.left           - Boolean response
 *
 * @returns {JSX.Element} React component for managing actions.
 */

export const Modal = ({
  children,
  toggleModal,
  triggerContent,
  showModal = false,
  styleButton = false,
  title,
  borderError = false,
  position = "absolute",
  top = "initial",
  right = "inital",
  bottom = "inital",
  left = "inital",
}) => {
  /**
   * change the state of the `showModal` using the toogleModal prop.
   *
   * @param {Event} event
   */
  const onCloseModal = (event) => {
    event.preventDefault();
    toggleModal(false);
  };

  return (
    <div className="modal">
      <button
        className={`${styleButton && "modal__toggle"}`}
        onClick={toggleModal}
        style={{
          border: borderError && "1px solid  var(--red-300)",
        }}
      >
        {triggerContent}
      </button>
      {showModal && (
        <div
          className="modal__wrapper"
          style={{
            position: position,
            top: top,
            right: right,
            bottom: bottom,
            left: left,
          }}
        >
          <>
            <header>
              <h3>{title}</h3>
              <button onClick={onCloseModal}>
                <CloseIcon />
              </button>
              <Hr />
            </header>

            {children}
          </>
        </div>
      )}
    </div>
  );
};

Modal.propTypes = {
  children: PropTypes.node.isRequired,
  toggleModal: PropTypes.func.isRequired,
  triggerContent: PropTypes.oneOfType([PropTypes.element, PropTypes.string])
    .isRequired,
  showModal: PropTypes.bool,
  styleButton: PropTypes.bool,
  title: PropTypes.string.isRequired,
  position: PropTypes.string,
  borderError: PropTypes.bool,
  top: PropTypes.string,
  right: PropTypes.string,
  bottom: PropTypes.string,
  left: PropTypes.string,
};
