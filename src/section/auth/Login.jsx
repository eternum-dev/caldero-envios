// import { Link } from "react-router-dom"
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import google from "../.././assets/icons/google.svg";
import { signIn, signInWithGoogle } from "../../firebase/auth";
import { Divider, Hr, InputField } from "../../components";
import "./login.css";

export const Login = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [ErrorMessage, setErrorMessage] = useState("");
  const [signingIn, setSigningIn] = useState(false);

  const onSubmit = async (event) => {
    event.preventDefault();
    if (!signingIn) {
      setSigningIn(true);
      await signIn(email, password);
    }
    navigate("/");
  };

  const onSignInGoogle = async (event) => {
    event.preventDefault();
    if (!signingIn) {
      setSigningIn(true);
      await signInWithGoogle().catch((err) => {
        setErrorMessage(err);
        console.log(err);
        setSigningIn(false);
      });
    }
    navigate("/");
  };

  return (
    <div className="login authpage__container">
      <h3 className="login__title">Hola de nuevo!</h3>

      <form action="" className="authpage__form" onSubmit={onSubmit}>
        <Divider text="Inicia con" />

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

        <div className="login__submitbox">
          <Hr justify="start" />
          <button className="loggin__submit" type="submit">
            enviar
          </button>
          <Hr />
        </div>
        {ErrorMessage && ErrorMessage}
        <div className="login__alterbox">
          <Divider text="O puedes usar" />

          <div className="login__links">
            <Hr size="3px" justify="center" />
            <button onClick={(event) => onSignInGoogle(event)}>
              {/* pasar a icon jsx */}
              <img src={google} alt="" style={{ width: "60px" }} />
            </button>

            <Hr size="3px" justify="center" />
          </div>
        </div>
      </form>
      <img
        src="#"
        alt="login image"
        className="login__image"
        style={{
          background: "#ccc",
          margin: " 0 2rem",
        }}
      />
    </div>
  );
};
