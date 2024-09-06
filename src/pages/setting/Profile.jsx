import { useEffect, useState } from "react";
import {
  getUserProfile,
  updateProfile,
  handleImageChange,
  updateProfileField,
} from "../../helpers";
import {
  DisplayInput,
  CustomButton,
  ResultLoaderModal,
} from "../../components";
import { ProfilePicture, ProfileHeader } from "../../section";
import "./profile.css";

export const Profile = () => {
  const [profile, setProfile] = useState(null);
  const [showModal, setShowModal] = useState(null);
  const [picture, setPicture] = useState(null);
  const [showResultLoader, setShowResultLoader] = useState(false);
  const [message, setmessage] = useState("");

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

  const updateUserProfile = async (event) => {
    event.preventDefault();
    setmessage("");
    setShowResultLoader((prev) => !prev);
    const { name, email, profilePicture } = profile;

    const profileResponse = await updateProfile(name, email, profilePicture);
    setmessage(profileResponse.message);
    console.log({name, email, profilePicture});
  };

  const toogleModal = (id, event) => {
    event.preventDefault();
    setShowModal((prev) => (prev === id ? null : id));
  };

  return (
    <div className="profile">
      <ProfileHeader />
      <form action="">
        <ProfilePicture
          picture={picture}
          setPicture={setPicture}
          profile={profile}
          showModal={showModal}
          toogleModal={toogleModal}
          handleImageChange={handleImageChange}
          setProfile={setProfile}
          setShowModal={setShowModal}
        />
        {Object.keys(profile).map(
          (key) =>
            key !== "profilePicture" && (
              <DisplayInput
                key={key}
                value={profile[key]}
                setInputValue={(currentItem, inputField) =>
                  updateProfileField(setProfile, currentItem, inputField)
                }
                fieldName={key}
              />
            )
        )}
        <CustomButton onClick={updateUserProfile}>Guardar</CustomButton>
      </form>
      {showResultLoader && (
        <ResultLoaderModal
          message={message}
          closeLoaderModal={setShowResultLoader}
        />
      )}
    </div>
  );
};
