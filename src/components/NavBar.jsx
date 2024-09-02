import { useContext, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { AuthContext } from "../context";
import {
  ButtonSignOut,
  Hr,
  LinkModal,
  Modal,
  SettingsIcon,
  SettingsUserIcon,
  DefaultUser,
  Motorcycle,
  Building,
  SavePassword,
  UserBox,
} from "./";
import "./navBar.css";

export const NavBar = () => {
  const [showModal, setshowModal] = useState(false);
  const { user } = useContext(AuthContext);

  const location = useLocation();
  const pathName = location.pathname;

  useEffect(() => {
    setshowModal(false);
  }, [pathName]);

  if (!user ) return <></>;

  const toggleModal = (id) => {
    setshowModal((prev) => (prev === id ? null : id));
  };

  return (
    <div className="navbar">
      <Modal
        toggleModal={() => toggleModal(1)}
        triggerContent={<SettingsUserIcon />}
        showModal={showModal === 1}
      >
        <header className="navbar__header">
          <DefaultUser />
          <span>Configuracion de usuario</span>
        </header>

        <div className="navbar__buttonbox">
          <LinkModal icon={<UserBox />}>Perfil</LinkModal>
          <LinkModal icon={<SavePassword />}>Contraseña</LinkModal>
        </div>
        <ButtonSignOut setModal={setshowModal} />
      </Modal>

      <Modal
        toggleModal={() => toggleModal(2)}
        triggerContent={<SettingsIcon />}
        showModal={showModal === 2}
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
