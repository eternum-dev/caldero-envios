import { doc, setDoc } from "firebase/firestore";
import { auth, db } from "../firebase/firebase";
import PropTypes from "prop-types";

/**
 * Actualiza la informacion de los locales almacenados en firebase.
 * @Funtion
 * @param   {object}    local - an object with local data.
 * @param   {string}    local.nombre
 * @param   {[object]}  local.locales
 * @param   {[object]}  local.repartidores
 *
 * @param   {array}   newStateValue - new state to save.
 * @param   {string}  currentItem - name of the document where the data will be saved.
 * @returns {object}  An object that indicates whether the operation was successful and a response message.
 */
export const updateLocalData = async (local, newStateValue, currentItem) => {
  try {
    const user = auth.currentUser;

    await setDoc(doc(db, "local", user.email), {
      ...local,
      [currentItem]: newStateValue,
    });
    return { success: true, message: "acutalizacion completada exitosamente" };
  } catch (error) {
    return { success: false, message: `Error: ${error}` };
  }
};

updateLocalData.propTypes = {
  local: PropTypes.shape({
    nombre: PropTypes.string.isRequired,
    locales: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
    repartidores: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
  }).isRequired,
  newStateValue: PropTypes.array.isRequired,
  currentItem: PropTypes.string.isRequired,
};
