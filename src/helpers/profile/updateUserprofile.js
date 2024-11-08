import { doc, setDoc } from "firebase/firestore";
import { auth, db, storage } from "../../firebase/firebase";
import { getDownloadURL, uploadBytes, ref } from "firebase/storage";

/**
 * Updates user profile information
 * @async
 * @function
 *
 * @param {string} name the user's name
 * @param {string} email the user's email
 * @param {File | string} profilePictureFile image file saved in a string
 * @returns {{success: boolean, message: string}} An object that indicates whether the operation was successful and a response message.
 *
 * @example
 *  const { name, email, profilePicture } = profile;
 *  const response = await updateProfile(name, email, profilePicture);
 *   setmessage(response.message);
 */

export const updateProfile = async (name, email, profilePictureFile) => {
  try {
    const user = auth.currentUser;
    if (!user) {
      throw new Error("No se pudo obtener el usuario actual.");
    }

    const metadata = {
      contentType: profilePictureFile.type,
    };

    let profilePictureUrl = profilePictureFile;
    if (profilePictureFile && typeof profilePictureFile !== "string") {
      const storageRef = ref(storage, `fotoPerfil/${user.email}`);
      await uploadBytes(storageRef, profilePictureFile, metadata);

      if (typeof profilePictureFile !== "string") {
        profilePictureUrl = await getDownloadURL(storageRef);
      }
    }

    await setDoc(doc(db, "user", user.email), {
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
