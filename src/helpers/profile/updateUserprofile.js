import { doc, setDoc } from "firebase/firestore";
import { auth, db, storage } from "../../firebase/firebase";
import { getDownloadURL, uploadBytes, ref } from "firebase/storage";

export const updateProfile = async (name, email, profilePictureFile) => {
  try {
    const user = auth.currentUser;

    // Subir la foto de perfil al Storage
    let profilePictureUrl = profilePictureFile;
    if (profilePictureFile) {
      const storageRef = ref(storage, `fotoPerfil/${user.uid}`);
      await uploadBytes(storageRef, profilePictureFile);

      // devuelve una url del archivo
      if (typeof profilePictureFile !== "string") {
        profilePictureUrl = await getDownloadURL(storageRef);
      }
    }

    // Guardar los datos en Firestore
    await setDoc(doc(db, "usuarios", user.uid), {
      name: name,
      email: email,
      profilePicture: profilePictureUrl,
    });

    console.log("Perfil actualizado correctamente");
  } catch (error) {
    console.error("Error al actualizar el perfil:", error);
  }
};
