import { doc, setDoc } from "firebase/firestore";
import { auth, db } from "../firebase/firebase";

export const updateLocalData = async (local, newStateValue, currentItem) => {
  try {
    const user = auth.currentUser;

    await setDoc(doc(db, "local", user.email), {
      ...local,
      [currentItem]: newStateValue,
    });
    console.log("acutalizacion completada exitosamente");
  } catch (error) {
    console.log("erorr: ", error);
  }
};
