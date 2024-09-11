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
  HamburgerIcon,
  CloseIcon,
} from "./";
import "./navBar.css";

export const NavBar = () => {
  const [showModal, setshowModal] = useState(false);
  const [showHamburger, setshowHamburger] = useState(false);
  const { user } = useContext(AuthContext);

  const location = useLocation();
  const pathName = location.pathname;

  useEffect(() => {
    setshowModal(false);
    setshowHamburger(false);
  }, [pathName]);

  if (!user) return <></>;

  const toggleModal = (id, event) => {
    event && event.preventDefault();
    setshowModal((prev) => (prev === id ? null : id));
  };

  return (
    <div className="navbar">
      <button
        className="navbar__hamburger"
        onClick={() => setshowHamburger((prev) => !prev)}
      >
        {!showHamburger ? <HamburgerIcon /> : <CloseIcon />}
      </button>
      <div className={`navbar__wrapper ${showHamburger && "show"}`}>
        <Modal
          toggleModal={(event) => toggleModal(1, event)}
          triggerContent={<SettingsUserIcon />}
          showModal={showModal === 1}
          title="Configuracion de usuario"
        >
          <header className="navbar__header">
            <DefaultUser />
          </header>

          <div className="navbar__buttonbox">
            <LinkModal icon={<UserBox />}>Perfil</LinkModal>
            <LinkModal icon={<SavePassword />}>Contraseña</LinkModal>
          </div>
          <ButtonSignOut setModal={setshowModal} />
        </Modal>

        <Modal
          toggleModal={(event) => toggleModal(2, event)}
          triggerContent={<SettingsIcon />}
          showModal={showModal === 2}
          title="Panel de Control"
        >
          <div className="navbar__buttonbox">
            <LinkModal icon={<Motorcycle />}>Repartidor</LinkModal>
            <LinkModal icon={<Building />}>Local</LinkModal>
          </div>
          <Hr />
        </Modal>
      </div>
    </div>
  );
};
