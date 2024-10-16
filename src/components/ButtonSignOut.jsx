import { useContext } from "react";
import PropTypes from "prop-types";
import { signOut } from "../firebase/auth";
import { AuthContext } from "../context";
import { Hr, CustomButton } from "./";
import { dataButtonSignOut } from "../data";
import "./buttonSignOut.css";

/**
 * ButtonSignOut component.
 *
 * This component renders a button for signing out the user.
 * It also toggles a modal and resets the user context upon sign out.
 *
 * @component
 * @example
 * return (
 *   <ButtonSignOut setModal={setModalFunction} />
 * )
 *
 * @param {object} props            - The component's props.
 * @param {function} props.setModal - Function to toggle the modal state.
 * @returns {JSX.Element} The rendered button with sign out functionality.
 */

export const ButtonSignOut = ({ setModal }) => {
  const { setUser } = useContext(AuthContext);
  const { text, justifyHr } = dataButtonSignOut;

  /**
   * handleLogout fuction 
   * 
   * 
   */
  const handleLogout = () => {
    setModal((prev) => !prev);
    signOut();
    setUser(null);
  };

  return (
    <div className="buttonsignout">
      <Hr />
      <CustomButton onClick={handleLogout}>{text}</CustomButton>
      <Hr justify={justifyHr} />
    </div>
  );
};

ButtonSignOut.propTypes = {
  setModal: PropTypes.func.isRequired,
};
