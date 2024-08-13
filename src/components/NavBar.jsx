import { useContext, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import SettingsIcon from "./SettingsIcon";
import SettingsUserIcon from "./SettingsUserIcon";
import DefaultUser from "./DefaultUser";
import { AuthContext } from "../context/auth/AuthContext";
import { Modal } from "./Modal";
import { ButtonSignOut } from "./ButtonSignOut";
import { Motorcycle, Building, SavePassword, UserBox } from "./icons";
import { Hr } from "./Hr";
import "./navBar.css";
import { LinkModal } from "./LinkModal";

export const NavBar = () => {
  const location = useLocation();
  const pathName = location.pathname;
  const [showModalConfig, setshowModalConfig] = useState(false);
  const [showModalUser, setshowModalUser] = useState(false);
  const { user } = useContext(AuthContext);
  
  // se cierra el modal al cambiar de pagina 
  useEffect(() => {
    
    setshowModalConfig(false);
    setshowModalUser(false);
  }, [pathName]);

  if (!user && pathName === "/auth") return <></>;

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
        <header className="navbar__header">
          <DefaultUser />
          <span>Configuracion de usuario</span>
        </header>

        <div className="navbar__buttonbox">
          <LinkModal icon={<UserBox />}>Perfil</LinkModal>
          <LinkModal icon={<SavePassword />}>Contraseña</LinkModal>
        </div>
        <ButtonSignOut setModal={setshowModalUser} />
      </Modal>

      <Modal
        toggleModal={toggleModalConfig}
        icon={<SettingsIcon />}
        showModal={showModalConfig}
      >
        <header className="navbar__header">
          <DefaultUser />
          <span>Panel de Control</span>
        </header>
        <div className="navbar__buttonbox">
          <LinkModal icon={<Motorcycle />}>Repartidor</LinkModal>
          <LinkModal icon={<Building />}>Local</LinkModal>
        </div>
        <Hr />
      </Modal>
    </div>
  );
};
