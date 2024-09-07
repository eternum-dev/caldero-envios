import { CustomButton, EditIcon, Modal } from "../../../components";
import PropTypes from "prop-types";
import { UploaderImage } from "../../../components/UploaderImage";

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
 * @param {String} prop.picture
 * @param {Function} prop.setPicture
 * @param {Object} prop.profile
 * @param {Function} prop.setProfile
 * @param {Number} prop.showModal
 * @param {Function} prop.setShowModal
 * @param {Function} prop.toogleModal
 * @param {Function} prop.handleImageChange
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
  return (
    <div className="profile__picture">
      <img
        className="profile__img"
        src={`${!picture ? profile.profilePicture : picture}`}
        alt="otro"
      />
      <Modal
        showModal={showModal === 1}
        toggleModal={(event) => toogleModal(1, event)}
        triggerContent={<EditIcon />}
      >
        <div className="profile__header">
          <h4>seleccionar foto</h4>
          <CustomButton onClick={() => setShowModal(null)}> x</CustomButton>
        </div>
        <div className="profile__modal">
          <UploaderImage
            handleImageChange={handleImageChange}
            setPicture={setPicture}
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
  );
};

ProfilePicture.propTypes = {
  picture: PropTypes.string,
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
