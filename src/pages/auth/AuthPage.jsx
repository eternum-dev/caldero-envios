import { useState } from "react";

import "./authpage.css";
import { Login, Register } from "../../section";
import { auth } from "../../data";

export const AuthPage = () => {
  const [isRegistered, setIsRegistered] = useState(true);
  const { buttons } = auth;

  return (
    <main className="authpage">
      <div className="authpage__buttonbox">
        <button
          onClick={() => setIsRegistered(true)}
          className={`authpage__button btn-left ${
            isRegistered && "authpage__button--isActive"
          }`}
        >
          {buttons.login}
        </button>
        <button
          onClick={() => setIsRegistered(false)}
          className={`authpage__button btn-right ${
            !isRegistered && "authpage__button--isActive"
          }`}
        >
          {buttons.signIn}
        </button>
      </div>

      {isRegistered ? <Login /> : <Register />}
    </main>
  );
};
