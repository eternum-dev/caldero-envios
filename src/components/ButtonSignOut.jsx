import { Hr } from "./Hr";
import { useContext } from "react";
import { AuthContext } from "../context/auth/AuthContext";
import PropTypes from "prop-types";
import { signOut } from "../firebase/auth";

export const ButtonSignOut = ({ setModal }) => {
  const { setUser } = useContext(AuthContext);

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "1fr auto 1fr",
        alignItems: "center",
      }}
    >
      <Hr />
      <button
        style={{
          padding: ".8rem  1.2rem",
          color: "var(--white)",
          border: "1px solid var(--white)",
          borderRadius: "5px",
        }}
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
