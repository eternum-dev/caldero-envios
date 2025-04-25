import { doc, getDoc } from "firebase/firestore";
import { auth, db } from "../firebase/firebase";

export const getLocal = async () => {
  const user = auth.currentUser;

  if (user) {
    const docRef = doc(db, "local", user.email);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      return docSnap.data();
    } else {
      return null;
    }
  }
};
