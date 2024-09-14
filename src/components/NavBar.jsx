import { useContext, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { AuthContext } from "../context";
import { headerData } from "../data";
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
  const { businesses, profile } = headerData.navBar;

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
          title={profile.title}
        >
          <header className="navbar__header">
            <DefaultUser />
          </header>

          <div className="navbar__buttonbox">
            <LinkModal icon={<UserBox />}>{profile.links.profile}</LinkModal>
            <LinkModal icon={<SavePassword />}>
              {profile.links.password}
            </LinkModal>
          </div>
          <ButtonSignOut setModal={setshowModal} />
        </Modal>

        <Modal
          toggleModal={(event) => toggleModal(2, event)}
          triggerContent={<SettingsIcon />}
          showModal={showModal === 2}
          title={businesses.title}
        >
          <div className="navbar__buttonbox">
            <LinkModal icon={<Motorcycle />}>
              {businesses.links.delivery}
            </LinkModal>
            <LinkModal icon={<Building />}>
              {businesses.links.branches}
            </LinkModal>
          </div>
          <Hr />
        </Modal>
      </div>
    </div>
  );
};
