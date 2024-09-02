import PropTypes from "prop-types";
import { CustomButton } from "../../../components";

export const BranchesActions = ({ addNewBranches, updateBranches }) => (
  <div className="branches__actions">
    <CustomButton size="fit-content" onClick={addNewBranches}>
      Añadir
    </CustomButton>
    <CustomButton onClick={updateBranches}>Guardar</CustomButton>
  </div>
);

BranchesActions.propTypes = {
  addNewBranches: PropTypes.func.isRequired,
  updateBranches: PropTypes.func.isRequired,
};
