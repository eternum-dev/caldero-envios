import { useContext } from "react";
import PropTypes from "prop-types";
import { signOut } from "../firebase/auth";
import { AuthContext } from "../context";
import { Hr, CustomButton } from "./";
import "./buttonSignOut.css";
import { dataButtonSignOut } from "../data";

export const ButtonSignOut = ({ setModal }) => {
  const { setUser } = useContext(AuthContext);
  const { text, justifyHr } = dataButtonSignOut;

  const handleButton = () => {
    setModal && setModal((prev) => !prev);
    signOut();
    setUser(null);
  };

  return (
    <div className="buttonsignout">
      <Hr />
      <CustomButton onClick={handleButton}>{text}</CustomButton>
      <Hr justify={justifyHr} />
    </div>
  );
};

ButtonSignOut.propTypes = {
  setModal: PropTypes.func,
};
