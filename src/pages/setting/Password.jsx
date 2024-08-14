import { CustomButton } from "../../components/CustomButton";
import { Hr } from "../../components/Hr";
import { InputField } from "../../components/InputField";
import "./password.css";

export const Password = () => {
  const handleClick = (event) => {
    event.preventDefault();
    console.log("clave guardada");
  };

  return (
    <div className="password">
      <h1>Password</h1>
      <Hr />
      <form action="">
        <InputField name="Contraseña Actual" type="password" />
        <InputField name="Nueva Contraseña" type="password" />
        <InputField name="Repite la Contraseña" type="password" />
        <CustomButton onClick={handleClick}>Guardar</CustomButton>
      </form>
    </div>
  );
};
