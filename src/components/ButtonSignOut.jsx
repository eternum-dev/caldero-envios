import { useContext } from "react";
import PropTypes from "prop-types";
import { signOut } from "../firebase/auth";
import { AuthContext } from "../context";
import { Hr, CustomButton } from "./";
import "./buttonSignOut.css";


export const ButtonSignOut = ({ setModal }) => {
  const { setUser } = useContext(AuthContext);

  const handleButton = () => {
    setModal && setModal((prev) => !prev);
    signOut();
    setUser(null);
  };

  return (
    <div className="buttonsignout">
      <Hr />
      <CustomButton onClick={handleButton}>cerrar session</CustomButton>
      <Hr justify="start" />
    </div>
  );
};

ButtonSignOut.propTypes = {
  setModal: PropTypes.func,
};
