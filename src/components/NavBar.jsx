import { useContext, useState } from "react";
import { useLocation } from "react-router-dom";
import SettingsIcon from "./SettingsIcon";
import SettingsUserIcon from "./SettingsUserIcon";
import DefaultUser from "./DefaultUser";
import userBox from "../assets/icons/user-box.svg";
import password from "../assets/icons/save-password.svg";
import { addLocal } from "../helpers/addLocal";
import { AuthContext } from "../context/auth/AuthContext";
import { Modal } from "./Modal";
import { ButtonSignOut } from "./ButtonSignOut";
import "./navBar.css";

export const NavBar = () => {
  const location = useLocation();
  const [showModalConfig, setshowModalConfig] = useState(false);
  const [showModalUser, setshowModalUser] = useState(false);
  const { user } = useContext(AuthContext);

  const docObject = {
    nombre: "caldero-envio-test",
    repartidores: [
      {
        nombre: "alejandro",
        edad: 28,
        telefono: "+56959141570",
      },
      {
        nombre: "erwin",
        edad: 52,
        telefono: "+569 otro numero",
      },
      {
        nombre: "cristopher",
        edad: 31,
        telefono: "+569 numeroo2",
      },
    ],
    cajeros: [
      {
        nombre: "alejandro cajero",
        edad: 27,
        telefono: "+56959141570 cajero",
      },
      {
        nombre: "erwin cajero",
        edad: 56,
        telefono: "+569 otro numero cajero",
      },
      {
        nombre: "cristopher cajero",
        edad: 36,
        telefono: "+569 numeroo2 cajero",
      },
    ],
  };

  if (!user && location.pathname === "/auth") return <></>;

  const toggleModalUser = () => {
    setshowModalUser((prev) => !prev);
    if (showModalConfig) setshowModalConfig(false);
  };

  const toggleModalConfig = () => {
    setshowModalConfig((prev) => !prev);
    if (showModalUser) setshowModalUser(false);
  };

  return (
    <div className="navbar">
      <Modal
        toggleModal={toggleModalUser}
        icon={<SettingsUserIcon />}
        showModal={showModalUser}
      >
        <DefaultUser />
        <div className="navbar__buttonbox">
          <button className="navbar__btn">
            <img src={userBox} alt="#" />
            perfil
          </button>
          <button className="navbar__btn" onClick={() => addLocal(docObject)}>
            <img src={password} alt="#" />
            contraseña
          </button>
        </div>
        <ButtonSignOut setModal={setshowModalUser} />
      </Modal>

      <Modal
        toggleModal={toggleModalConfig}
        icon={<SettingsIcon />}
        showModal={showModalConfig}
      >
        {/* crear partes modal config*/}
        <img src="#" alt="un gato" />
        <div className="navbar__buttonbox">
          <button className="navbar__btn">
            <img src={userBox} alt="#" />
            patita de gato
          </button>
          <button className="navbar__btn" onClick={() => {console.log("mi orejaaaaaa");}}>
            <img src={password} alt="#" />
            orejita
          </button>
        </div>
        <button>apretar aqui para abrazar un gato</button>
      </Modal>
    </div>
  );
};
