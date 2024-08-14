import { CustomButton } from "../../components/CustomButton";
import { Hr } from "../../components/Hr";
import { InputField } from "../../components/InputField";
import "./profile.css";

export const Profile = () => {
  return (
    <div className="profile">
      <h1>Settings Profile</h1>
      <Hr justify="center" />
      <form action="">
        <div className="profile__picture">
          <img className="profile__img" src="#" alt="" />
          <div className="profile__buttonbox">
            <button className="profile__button">
              {/* agregar icon */}
              editar
            </button>
            <button className="profile__button">
              {/* agregar icon */}
              eliminar
            </button>
          </div>
        </div>
        <InputField name={"nombre"}> </InputField>
        <InputField name={"correo"} type="email">
          {" "}
        </InputField>
        <CustomButton>Guardar</CustomButton>
      </form>
    </div>
  );
};
