import { CloseIcon } from "../../../components";
import { branchesRowHeader } from "../../../data";

export const BranchesRowHeader = () => {
  const { location, name, phoneNumber } = branchesRowHeader;

  return (
    <div className="branches__row branches__row--header">
      <span>{name}</span>
      <span>{phoneNumber}</span>
      <span>{location}</span>
      <span>{<CloseIcon width="24px" height="24px" />}</span>
    </div>
  );
};
