import { doc, setDoc } from "firebase/firestore";
import { auth, db, storage } from "../../firebase/firebase";
import { getDownloadURL, uploadBytes, ref } from "firebase/storage";
import PropTypes from "prop-types";

/**
 * Updates user profile information
 * @async
 * @function
 *
 * @param {Object} props
 * @param {String} props.name the user's name
 * @param {String} props.email the user's email
 * @param {String} props.profilePictureFile image file saved in a string
 * @returns {Object} An object that indicates whether the operation was successful and a response message.
 *
 * @example
 *  const { name, email, profilePicture } = profile;
 *  const response = await updateProfile(name, email, profilePicture);
 *   setmessage(response.message);
 */

export const updateProfile = async (name, email, profilePictureFile) => {
  try {
    const user = auth.currentUser;

    let profilePictureUrl = profilePictureFile;
    if (profilePictureFile) {
      const storageRef = ref(storage, `fotoPerfil/${user.uid}`);
      await uploadBytes(storageRef, profilePictureFile);

      if (typeof profilePictureFile !== "string") {
        profilePictureUrl = await getDownloadURL(storageRef);
      }
    }

    await setDoc(doc(db, "usuarios", user.uid), {
      name: name,
      email: email,
      profilePicture: profilePictureUrl,
    });

    return { success: true, message: "Perfil actualizado correctamente" };
  } catch (error) {
    return {
      success: false,
      message: `Error al actualizar el perfil: ${error}`,
    };
  }
};

updateProfile.propTypes = {
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  profilePictureFile: PropTypes.string.isRequired,
};
