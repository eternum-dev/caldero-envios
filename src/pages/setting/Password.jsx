import { useState } from "react";
import { auth } from "../../firebase";
import { PasswordForm } from "../../section";
import { PageHeader, ResultLoaderModal } from "../../components";
import "./password.css";
import { updateUserPassword } from "../../helpers/password/userHelpers";
import { passwordHeader } from "../../data";

export const Password = () => {
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const [message, setMessage] = useState("");
  const [showResultLoader, setshowResultLoader] = useState(false);
  const { title } = passwordHeader;

  const handleChangePassword = async (event) => {
    event.preventDefault();
    setMessage("");
    setshowResultLoader((prev) => !prev);

    const user = auth.email;
    const messageResponse = await updateUserPassword(
      user,
      currentPassword,
      newPassword
    );
    setMessage(messageResponse);
  };

  const handleChangeInput = (event, setState) => {
    setState(event.target.value);
  };

  return (
    <div className="password page">
      <PageHeader title={title} />
      <PasswordForm
        handleChangeInput={handleChangeInput}
        handleChangePassword={handleChangePassword}
        setCurrentPassword={setCurrentPassword}
        setNewPassword={setNewPassword}
        setRepeatPassword={setRepeatPassword}
        currentPassword={currentPassword}
        newPassword={newPassword}
        repeatPassword={repeatPassword}
      />
      {showResultLoader && (
        <ResultLoaderModal
          message={message}
          closeLoaderModal={() => setshowResultLoader(false)}
        />
      )}
    </div>
  );
};
