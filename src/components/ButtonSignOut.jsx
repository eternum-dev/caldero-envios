import { useContext } from "react";
import { AuthContext } from "../context/auth/AuthContext";
import PropTypes from "prop-types";
import { signOut } from "../firebase/auth";
import { Hr } from "./Hr";
import "./buttonSignOut.css"

export const ButtonSignOut = ({ setModal }) => {
  const { setUser } = useContext(AuthContext);

  return (
    <div className="buttonsignout">
      <Hr />
      <button
        className="buttonsignout__btn"
        onClick={() => {
          setModal && setModal((prev) => !prev);
          signOut();
          setUser(null);
        }}
      >
        cerrar session
      </button>
      <Hr justify="start" />
    </div>
  );
};

ButtonSignOut.propTypes = {
  setModal: PropTypes.func,
};
