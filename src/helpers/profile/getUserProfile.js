import { doc, getDoc } from "firebase/firestore";
import { auth, db } from "../../firebase/firebase";


export const getUserProfile = async () => {
  const user = auth.currentUser;

  if (user) {
    const docRef = doc(db, "usuarios", user.uid);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      return docSnap.data();
    } else {
      console.log("No such document!");
      return null;
    }
  }
};
