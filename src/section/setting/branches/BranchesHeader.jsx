import { Hr } from "../../../components";
import { branchesHeader } from "../../../data";

export const BranchesHeader = () => {
  const { title } = branchesHeader;
  return (
    <div className="branches__header">
      <h1>{title}</h1>
      <Hr />
    </div>
  );
};
