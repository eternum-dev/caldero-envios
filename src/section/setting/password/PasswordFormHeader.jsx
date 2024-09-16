import { Hr } from "../../../components";
import { passwordHeader } from "../../../data";

export const PasswordFormHeader = () => {
  const { title } = passwordHeader;
  return (
    <>
      <h1>{title}</h1>
      <Hr />
    </>
  );
};
