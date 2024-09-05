import { EmailAuthProvider, reauthenticateWithCredential } from "firebase/auth";
import { changePassword } from "../../firebase";
import PropTypes from "prop-types";
/**
 * Update the password of an authenticated user in Firebase
 * @async
 * @function
 *
 * @param {Object} user - The Firebase user object, which contains authenticated user information.
 * @param {String} user.email  - The user's email.
 * @param {String} currentPassword - The user's current password.
 * @param {String} newPassword  - The new password you want to set.
 *
 * @returns {Object} An object that indicates whether the operation was successful and a response message.
 *
 * @example
 * const user = auth.email;
 * const messageResponse = await updateUserPassword(user, currentPassword, newPassword);
 * setMessage(messageResponse);
 *
 */
export const updateUserPassword = async (
  user,
  currentPassword,
  newPassword
) => {
  const credential = EmailAuthProvider.credential(user.email, currentPassword);

  try {
    await reauthenticateWithCredential(user, credential);
    await changePassword(user, newPassword);
    return { success: true, message: "Contraseña actualizada con éxito." };
  } catch (error) {
    return { success: false, message: "Error: " + error.message };
  }
};

updateUserPassword.propTypes = {
  user: PropTypes.shape({
    email: PropTypes.string.isRequired,
  }).isRequired,
  currentPassword: PropTypes.string.isRequired,
  newPassword: PropTypes.string.isRequired,
};
