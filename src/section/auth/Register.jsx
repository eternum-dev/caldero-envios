import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createUser, signIn, signInWithGoogle } from "../../firebase/auth";
import { CustomButton, Divider, Hr, InputField } from "../../components";
import google from "../.././assets/icons/google.svg";
import "./register.css";
import { signInData } from "../../data";

export const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const [ErrorMessage, setErrorMessage] = useState("");
  const [signingIn, setSigningIn] = useState(false);

  const {
    saveButton,
    divider,
    image,
    title,
    input: {
      email: inputEmail,
      password: inputPassword,
      name: inputName,
      repeatPassword: inputRepeatPassword,
    },
  } = signInData;

  const navigate = useNavigate();
  const defaultPatToNavigate = "/";
  const messageSuccessful = "Completado!, haz iniciado sesión con exito";

  const onSubmit = async (event) => {
    event.preventDefault();
    if (!signingIn) {
      setSigningIn(true);
      await createUser(email, password).catch((err) => console.log(err));
      await signIn(email, password).then(navigate(defaultPatToNavigate));
    }
  };

  const onSignInGoogle = async (event) => {
    event.preventDefault();
    if (!signingIn) {
      setSigningIn(true);
      await signInWithGoogle()
        .then(console.info(messageSuccessful))
        .catch((err) => {
          setErrorMessage(err);
          setSigningIn(false);
        });
      navigate(defaultPatToNavigate);
    }
  };

  return (
    <section className="register authpage__container">
      <h3 className="register__title">{title}</h3>

      <form action="" className="authpage__form" onSubmit={onSubmit}>
        <Divider text={divider.start} />

        <InputField
          name={inputName.name}
          type={inputName.type}
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
        <InputField
          name={inputEmail.name}
          type={inputEmail.type}
          value={email}
          onChange={(event) => {
            setEmail(event.target.value);
          }}
        />

        <InputField
          name={inputPassword.name}
          type={inputPassword.type}
          value={password}
          onChange={(event) => {
            setPassword(event.target.value);
          }}
        />
        <InputField
          name={inputRepeatPassword.name}
          type={inputRepeatPassword.type}
          value={repeatPassword}
          onChange={(event) => setRepeatPassword(event.target.value)}
        />

        <div className="register__submitbox">
          <Hr justify="start" />
          <CustomButton type="submit">{saveButton}</CustomButton>
          <Hr />
        </div>

        {ErrorMessage && (
          <h3 className="register__error-message">{ErrorMessage}</h3>
        )}

        <div className="register__alterbox">
          <Divider text={divider.end} />

          <div className="register__links">
            <Hr size="3px" justify="center" />

            <button onClick={(event) => onSignInGoogle(event)}>
              <img src={google} alt="google" className="register__image-link" />
            </button>

            <Hr size="3px" justify="center" />
          </div>
        </div>
      </form>
      <img src={image} alt="register image" className="register__image" />
    </section>
  );
};
