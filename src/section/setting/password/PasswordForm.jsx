import { CustomButton, InputField } from "../../../components";
import PropTypes from "prop-types";

/**
 * Description
 * @component
 * @example
 * const handleChangePassword = () => { console.log("handleChangePassword") }
 * const handleChangeInput = () => { console.log("handleChangeInput") }
 * const [currentPassword, setCurrentPassword] = useState(""); 
 * const [newPassword, setNewPassword] = useState("");
 * const [repeatPasswordRepeatPassword] = useState("");
 * 
 * return (
 *  <PasswordForm
      handleChangeInput={handleChangeInput}
      handleChangePassword={handleChangePassword}
      setCurrentPassword={setCurrentPassword}
      setNewPassword={setNewPassword}
      setRepeatPassword={setRepeatPassword}
      currentPassword={currentPassword}
      newPassword={newPassword}
      repeatPassword={repeatPassword}
    />
 * );
 * @param {Object} prop
 * @param {Function} prop.handleChangePassword
 * @param {Function} prop.handleChangeInput
 * @param {string} prop.currentPassword
 * @param {string} prop.newPassword
 * @param {string} prop.repeatPassword
 * @param {Function} prop.setCurrentPassword
 * @param {Function} prop.setNewPassword,
 * @param {Function} prop.setRepeatPassword,
 * @returns {JSX.Element} React  component with password form
 */

export const PasswordForm = ({
  handleChangePassword,
  handleChangeInput,
  currentPassword,
  newPassword,
  repeatPassword,
  setCurrentPassword,
  setNewPassword,
  setRepeatPassword,
}) => {
  return (
    <form action="" onSubmit={handleChangePassword}>
      <InputField
        name="Contraseña Actual"
        type="password"
        value={currentPassword}
        onChange={(event) => handleChangeInput(event, setCurrentPassword)}
      />

      <InputField
        name="Nueva Contraseña"
        type="password"
        value={newPassword}
        onChange={(event) => handleChangeInput(event, setNewPassword)}
      />

      <InputField
        name="Repite la Contraseña"
        type="password"
        value={repeatPassword}
        onChange={(event) => handleChangeInput(event, setRepeatPassword)}
      />

      <CustomButton type={"submit"}>Guardar</CustomButton>
    </form>
  );
};

PasswordForm.propTypes = {
  handleChangePassword: PropTypes.func.isRequired,
  handleChangeInput: PropTypes.func.isRequired,
  currentPassword: PropTypes.string,
  newPassword: PropTypes.string,
  repeatPassword: PropTypes.string,
  setCurrentPassword: PropTypes.func.isRequired,
  setNewPassword: PropTypes.func.isRequired,
  setRepeatPassword: PropTypes.func.isRequired,
};
