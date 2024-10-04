import { useEffect, useState, useContext } from "react";
import {
  updateProfile,
  handleImageChange,
  updateProfileField,
} from "../../helpers";
import { MapContext } from "../../context";
import {
  DisplayInput,
  CustomButton,
  ResultLoaderModal,
} from "../../components";
import { ProfilePicture, ProfileHeader } from "../../section";
import { dataProfile } from "../../data";
import "./profile.css";

export const Profile = () => {
  const [showModal, setShowModal] = useState(null);
  const [picture, setPicture] = useState({ preview: "", file: "" });
  const [showResultLoader, setShowResultLoader] = useState(false);
  const [message, setmessage] = useState("");
  const { local } = useContext(MapContext);
  const [profile, setProfile] = useState(null);
  const { button, docItem } = dataProfile;

  useEffect(() => {
    if (local) {
      setProfile(local.user);
    }
  }, [local]);

  if (!profile) return;
  const { name, email } = profile;

  const updateUserProfile = async (event) => {
    event.preventDefault();
    setmessage("");
    setShowResultLoader((prev) => !prev);

    const profileResponse = await updateProfile(name, email, picture.file);
    setmessage(profileResponse.message);
  };

  const toogleModal = (id, event) => {
    event && event.preventDefault();

    setShowModal((prev) => (prev === id ? null : id));
  };

  return (
    <div className="profile page">
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
            key !== docItem && (
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

        <CustomButton onClick={updateUserProfile}>{button}</CustomButton>
      </form>
      {showResultLoader && (
        <ResultLoaderModal
          message={message}
          closeLoaderModal={setShowResultLoader}
          previewPicture={picture.preview}
        />
      )}
    </div>
  );
};
