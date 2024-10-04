import {
  CloseButton,
  CustomButton,
  EditIcon,
  Modal,
} from "../../../components";
import PropTypes from "prop-types";
import { UploaderImage } from "../../../components/UploaderImage";
import { profilePicture } from "../../../data";

/**
 * @component
 * @example 
 * const toogleModal = () => { console.log("toogleModal") }
 * const handleImageChange = () => { console.log("handleImageChange") }
 * const [picture, setPicture] = useState(""); 
 * const [profile, setprofile] = useState({});
 * const [showModal, setShowModal] = useState(false);
 * 
 * return (
 *  <ProfilePicture
      picture={picture}
      setPicture={setPicture}
      profile={profile}
      setProfile={setProfile}
      showModal={showModal}
      setShowModal={setShowModal}
      toogleModal={toogleModal}
      handleImageChange={handleImageChange}
    />
 * );

 * Description
 * @param {Object} prop
 *  @param {Object} prop.picture
 *    @param {String}   prop.picture.file
 *    @param {String}   prop.picture.preview
 *  @param {Function} prop.setPicture
 *  @param {Object}   prop.profile
 *    @param {String}   prop.profile.name
 *    @param {String}   prop.profile.email
 *    @param {String}   prop.profile.profilePicture
 *  @param {Function} prop.setProfile
 *  @param {Number}   prop.showModal
 *  @param {Function} prop.setShowModal
 *  @param {Function} prop.toogleModal
 *  @param {Function} prop.handleImageChange
 * 
 * @returns {JSX.Element} 
 * */
export const ProfilePicture = ({
  picture,
  setPicture,
  profile,
  showModal,
  toogleModal,
  handleImageChange,
  setProfile,
  setShowModal,
}) => {
  const { button, title } = profilePicture;

  return (
    <div className="profile__picture">
      <img
        className="profile__img"
        src={`${!picture.preview ? profile.profilePicture : picture.preview}`}
        alt="otro"
      />
      <Modal
        showModal={showModal === 1}
        toggleModal={(event) => toogleModal(1, event)}
        triggerContent={<EditIcon />}
        title={title}
      >
        <div className="profile__modal">
          <UploaderImage
            handleImageChange={handleImageChange}
            setPicture={setPicture}
          />
          {picture.preview && (
            <div className="preview">
              <img
                src={picture.preview}
                className="preview__image"
                alt="preview image"
              />
              <CloseButton
                onClick={() =>
                  setPicture((prev) => {
                    return { ...prev, preview: "" };
                  })
                }
              />
            </div>
          )}
          <CustomButton
            onClick={(event) => {
              event.preventDefault();
              setProfile((prev) => {
                return { ...prev, profilePicture: picture.preview };
              });
              setShowModal(false);
            }}
          >
            {button}
          </CustomButton>
        </div>
      </Modal>
    </div>
  );
};

ProfilePicture.propTypes = {
  picture: PropTypes.shape({
    file: PropTypes.string.isRequired,
    preview: PropTypes.string.isRequired,
  }),
  setPicture: PropTypes.func.isRequired,
  profile: PropTypes.shape({
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    profilePicture: PropTypes.string.isRequired,
  }),
  showModal: PropTypes.oneOfType([PropTypes.any, PropTypes.number.isRequired]),
  toogleModal: PropTypes.func.isRequired,
  handleImageChange: PropTypes.func.isRequired,
  setProfile: PropTypes.func.isRequired,
  setShowModal: PropTypes.func.isRequired,
};
