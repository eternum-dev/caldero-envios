import { doc, setDoc } from "firebase/firestore";
import { auth, db } from "../firebase/firebase";



export const addLocal = async (docObject) => {
 
    try {
        await setDoc(doc(db, "local", auth.currentUser.email), docObject);
        console.log("Document written",);
    } catch (error) {
        console.error("Error adding document: ", error);
    }
}