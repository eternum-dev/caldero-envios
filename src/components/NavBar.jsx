import { useContext, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { AuthContext, MapContext } from "../context";
import { headerData } from "../data";
import {
  ButtonSignOut,
  Hr,
  LinkModal,
  Modal,
  SettingsIcon,
  SettingsUserIcon,
  Motorcycle,
  Building,
  SavePassword,
  UserBox,
  HamburgerIcon,
  CloseIcon,
  DefaultUser,
} from "./";
import "./navBar.css";

/**
 * NavBar component  renders the navigation bar, which includes buttons for user settings,
 * business settings.
 *
 * @component
 * @example
 * return (
 *   <NavBar />
 * )
 * @returns {JSX.Element} The rendered navigation bar with modals for user and business settings.
 */

export const NavBar = () => {
  const [showModal, setshowModal] = useState(false);
  const [showHamburger, setshowHamburger] = useState(false);
  const { local, errorDB } = useContext(MapContext);
  const { user } = useContext(AuthContext);

  const location = useLocation();
  const pathName = location.pathname;

  /**
   * useEffect hook to close the modals and hamburger menu when the path changes.
   */
  useEffect(() => {
    setshowModal(false);
    setshowHamburger(false);
  }, [pathName]);

  if (!user || !local) return <></>;

  const { businesses, profile } = headerData.navBar;
  const { user: localUser } = local;
  const userPicture = localUser.profilePicture;

  /**
   * Toggles the visibility of the modal with a given id.
   *
   * @param {number} id - The ID of the modal to toggle.
   * @param {Event} event - The event that triggered the modal toggle.
   */
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
        <div className="navbar--circle navbar--circle--acount">
          <div className={`navbar__container navbar__container--acount`}></div>
          <Modal
            toggleModal={(event) => toggleModal(1, event)}
            triggerContent={<SettingsUserIcon />}
            showModal={showModal === 1}
            title={profile.title}
            right="0"
            top="3,5rem"
          >
            <div className="navbar__header">
              {userPicture ? (
                <img
                  src={userPicture}
                  alt="profile image"
                  className="navbar__profile-picture"
                />
              ) : (
                <DefaultUser />
              )}
            </div>

            <div className="navbar__buttonbox">
              <LinkModal icon={<UserBox />}>{profile.links.profile}</LinkModal>
              <LinkModal icon={<SavePassword />}>
                {profile.links.password}
              </LinkModal>
            </div>
            <ButtonSignOut setModal={setshowModal} />
          </Modal>
        </div>
        <div className="navbar--circle .navbar--circle--config">
          <div
            className={`navbar__container ${
              errorDB && "error"
            } navbar__container--config`}
          ></div>
          <Modal
            toggleModal={(event) => toggleModal(2, event)}
            triggerContent={<SettingsIcon />}
            showModal={showModal === 2}
            title={businesses.title}
            right="0"
            top="3.5rem"
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
    </div>
  );
};
