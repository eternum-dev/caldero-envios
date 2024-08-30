import { useEffect, useState } from "react";
import { CustomButton } from "../../components/CustomButton";
import { Hr } from "../../components/Hr";
import { getUserProfile } from "../../helpers/profile/getUserProfile";
import { updateProfile } from "../../helpers/profile/updateUserprofile";
import "./profile.css";
import { DisplayInput } from "../../components/DisplayInput";
import { Modal } from "../../components/Modal";
import {
  handleImageChange,
  updateProfileField,
} from "../../helpers/profile/profileStateUtils";

export const Profile = () => {
  const [profile, setProfile] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [picture, setPicture] = useState(null);

  useEffect(() => {
    const getUser = async () => {
      try {
        const resp = await getUserProfile();
        setProfile(resp);
      } catch (error) {
        throw new Error("this is error: ", error);
      }
    };
    getUser();
  }, []);

  if (!profile) return;

  const updateUserProfile = (event) => {
    event.preventDefault();

    const { name, email, profilePicture } = profile;
    updateProfile(name, email, profilePicture);
  };

  const toogleModal = (id, event) => {
    event.preventDefault();
    setShowModal((prev) => (prev === id ? null : id));
  };

  return (
    <div className="profile">
      <h1>Settings Profile</h1>
      <Hr justify="center" />
      <form action="">
        <div className="profile__picture">
          <img
            className="profile__img"
            src={`${!picture ? profile.profilePicture : picture}`}
            alt="otro"
          />
          <Modal
            showModal={showModal === 1}
            toggleModal={(event) => toogleModal(1, event)}
            triggerContent={"aaslñdasd"}
          >
            <h4>seleccionar foto</h4>
            <div className="profile__modal">
              <input
                type="file"
                className="profile__input"
                accept="image/*"
                onChange={(event) => handleImageChange(event, setPicture)}
              />
              <CustomButton
                onClick={(event) => {
                  event.preventDefault();
                  setProfile((prev) => {
                    return { ...prev, profilePicture: picture };
                  });
                  setShowModal(false);
                }}
              >
                guardar
              </CustomButton>
            </div>
          </Modal>
        </div>
        {Object.keys(profile).map(
          (key) =>
            key !== "profilePicture" && (
              <DisplayInput
                key={key}
                value={profile[key]}
                setInputValue={(currentItem, inputField) =>
                  updateProfileField(currentItem, inputField)
                }
                fieldName={key}
              />
            )
        )}
        <CustomButton onClick={updateUserProfile}>Guardar</CustomButton>
      </form>
    </div>
  );
};
