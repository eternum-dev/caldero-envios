import { branchesRowHeader } from "../../../data";

export const BranchesRowHeader = () => {
  const { location, name, phoneNumber } = branchesRowHeader;

  return (
    <div className="branches__row branches__row--header">
      <span>{name}</span>
      <span>{phoneNumber}</span>
      <span>{location}</span>
    </div>
  );
};
