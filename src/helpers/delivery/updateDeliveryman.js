import { doc, setDoc } from "firebase/firestore";
import { auth, db } from "../../firebase/firebase";

export const UpdateDeliveryman = async (local, stateNewDelivery) => {
  try {
    const user = auth.currentUser;

    await setDoc(doc(db, "local", user.email), {
       ...local, ["repartidores"]: stateNewDelivery
      });
      console.log("acutalizacion completada exitosamente");
  } catch (error) {
    console.log("erorr: ", error);
  }
};
