import { doc, setDoc } from "firebase/firestore";
import { auth, db } from "../../firebase/firebase";

/**
 * Adds or updates the current authenticated user's profile in Firestore.
 *
 * @async
 * @function
 * @param {Object} profileData - An object containing the user's profile information to be stored.
 * @returns {Promise<void>} A promise that resolves when the document is successfully written.
 *
 * @example
 * const data = { name: "Carlos", phone: "123456789", profilePicture: "url" };
 * await addUserProfile(data);
 */
export const addUserProfile = async (profileData) => {
  try {
    const user = auth.currentUser;
    await setDoc(doc(db, "user", user.email), profileData);
    console.info("Usuario añadido con exito");
  } catch (error) {
    console.error("Error al añadir el perfil: ", error);
  }
};
