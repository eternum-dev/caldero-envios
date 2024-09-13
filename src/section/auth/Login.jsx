import { useState } from "react";
import { useNavigate } from "react-router-dom";
import google from "../.././assets/icons/google.svg";
import { signIn, signInWithGoogle } from "../../firebase/auth";
import { CustomButton, Divider, Hr, InputField } from "../../components";
import { login } from "../../data";
import "./login.css";

export const Login = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [ErrorMessage, setErrorMessage] = useState("");
  const [signingIn, setSigningIn] = useState(false);

  const {
    saveButton,
    divider,
    image,
    title,
    input: { email: inputEmail, password: inputPassword },
  } = login;

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
      <h3 className="login__title">{title}</h3>

      <form action="" className="authpage__form" onSubmit={onSubmit}>
        <Divider text={divider.start} />

        <InputField
          name={inputEmail.name}
          type={inputEmail.type}
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />

        <InputField
          name={inputPassword.name}
          type={inputPassword.type}
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />

        <div className="login__submitbox">
          <Hr justify="start" />
          <CustomButton type="submit">{saveButton}</CustomButton>
          <Hr />
        </div>
        {ErrorMessage && ErrorMessage}
        <div className="login__alterbox">
          <Divider text={divider.end} />

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
        src={image}
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
