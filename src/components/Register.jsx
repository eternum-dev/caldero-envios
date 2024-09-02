import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createUser, signIn, signInWithGoogle } from "../firebase/auth";
import { Divider, Hr, InputField } from ".";
import google from "../assets/icons/google.svg";
import "./register.css";

export const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const [ErrorMessage, setErrorMessage] = useState("");
  const [signingIn, setSigningIn] = useState(false);

  const navigate = useNavigate();

  const onSubmit = async (event) => {
    event.preventDefault();
    if (!signingIn) {
      setSigningIn(true);
      await createUser(email, password).catch((err) => console.log(err));

      await signIn(email, password).then(navigate("/"));
    }
  };

  const onSignInGoogle = async (event) => {
    event.preventDefault();
    if (!signingIn) {
      setSigningIn(true);
      signInWithGoogle()
        .then(console.log("hola"), navigate("/"))
        .catch((err) => {
          setErrorMessage(err);
          setSigningIn(false);
        });
    }
  };

  return (
    <div className="register authpage__container">
      <h3 className="register__title">construyamos un mapa juntos!</h3>

      <form action="" className="authpage__form" onSubmit={onSubmit}>
        <Divider text="Registrate con" />

        <InputField
          name="name"
          type="text"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
        <InputField
          name="email"
          type="email"
          value={email}
          onChange={(event) => {
            setEmail(event.target.value);
          }}
        />

        <InputField
          name="password"
          type="password"
          value={password}
          onChange={(event) => {
            setPassword(event.target.value);
          }}
        />
        <InputField
          name="repeatPassword"
          type="password"
          value={repeatPassword}
          onChange={(event) => setRepeatPassword(event.target.value)}
        />

        <div className="register__submitbox">
          <Hr justify="start" />
          <button
            type="submit"
            style={{
              padding: ".8rem  1.2rem",
              color: "var(--white)",
              border: "1px solid var(--white)",
              borderRadius: "5px",
            }}
          >
            Registrarme
          </button>
          <Hr />
        </div>

        {ErrorMessage && (
          <h3 style={{ color: "red", background: "#ccc" }}>{ErrorMessage}</h3>
        )}

        <div className="register__alterbox">
          <Divider text="o tambien puedes hacerlo por" />

          <div className="register__links">
            <Hr size="3px" justify="center" />

            <button onClick={(event) => onSignInGoogle(event)}>
              <img src={google} alt="" style={{ width: "60px" }} />
            </button>

            <Hr size="3px" justify="center" />
          </div>
        </div>
      </form>
      <img
        src="#"
        alt="register image"
        className="register__image"
        style={{
          background: "#ccc",
          margin: " 0 2rem",
        }}
      />
    </div>
  );
};
