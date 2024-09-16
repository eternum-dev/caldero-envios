import { Hr } from "../../../components";
import { profileHeader } from "../../../data";

export const ProfileHeader = () => {
  const { title } = profileHeader;
  return (
    <>
      <h1>{title}</h1>
      <Hr justify="center" />
    </>
  );
};
