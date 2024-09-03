import PropTypes from "prop-types";
import { CustomButton } from "./";

/**
 * ManageActions component for managing actions like adding and updating items
 * .
 * @component
 * @example
 *  const addItem = () => { console.log('Item added') };
 *  const updateItem = () => { console.log('Item updated') };
 *
 *  return (
 *   <ManageActions addItem={addItem} updateItem={updateItem} />
 *  )
 *
 * @param {Function} addItem  Function to add a new item row to the table state.
 * @param {Function} saveChanges Function to save the current state changes to the database.
 * @returns {JSX.Element} React component for managing actions.
 */

export const ManageActions = ({ addItem, saveChanges }) => (
  <div className="branches__actions">
    <CustomButton size="fit-content" onClick={addItem}>
      Añadir
    </CustomButton>
    <CustomButton onClick={saveChanges}>Guardar</CustomButton>
  </div>
);

ManageActions.propTypes = {
  addItem: PropTypes.func.isRequired,
  saveChanges: PropTypes.func.isRequired,
};
