import { useState } from "react";
import { CustomButton } from "../../components/CustomButton";
import { Hr } from "../../components/Hr";
import { InputField } from "../../components/InputField";
import { EmailAuthProvider, reauthenticateWithCredential } from "firebase/auth";
import { auth } from "../../firebase/firebase";
import { changePassword } from "../../firebase/auth";
import "./password.css";

export const Password = () => {
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  const handleChangePassword = async (event) => {
    event.preventDefault();
    // Reautenticación del usuario
    const user = auth.currentUser;
    console.log(user.email);
    const credential = EmailAuthProvider.credential(
      user.email,
      currentPassword
    );

    try {
      await reauthenticateWithCredential(user, credential);
      // Si la reautenticación fue exitosa, se procede a cambiar la contraseña
      await changePassword(user, newPassword);
      setSuccess("Contraseña actualizada  con exito!");
      setError("");
    } catch (error) {
      setError("Error: " + error.message);
    }
  };

  const handleChangeInput = (event, setState) => {
    setState(event.target.value);
  };

  return (
    <div className="password">
      <h1>Actualizar contraseña</h1>
      <Hr />
      <form action="" onSubmit={handleChangePassword}>
        <InputField
          name="Contraseña Actual"
          type="password"
          value={currentPassword}
          onChange={(event) => handleChangeInput(event, setCurrentPassword)}
        />

        <InputField
          name="Nueva Contraseña"
          type="password"
          value={newPassword}
          onChange={(event) => handleChangeInput(event, setNewPassword)}
        />

        <InputField
          name="Repite la Contraseña"
          type="password"
          value={repeatPassword}
          onChange={(event) => handleChangeInput(event, setRepeatPassword)}
        />

        <CustomButton type={"submit"}>Guardar</CustomButton>
      </form>

      {/* TODO: cambiar por un loading 
        mostrar atraves de un modal */}
      <p style={{ color: "white", textAlign: "center" }}>
        {error ? error : success}
      </p>
    </div>
  );
};
