import { doc, setDoc } from "firebase/firestore";
import { auth, db } from "../../firebase/firebase";

export const addUserProfile = async (profileData) => {
  try {
    const user = auth.currentUser;
    await setDoc(doc(db, "user", user.email), profileData);
    console.info("Usuario añadido con exito");
  } catch (error) {
    console.error("Error al añadir el perfil: ", error);
  }
};
