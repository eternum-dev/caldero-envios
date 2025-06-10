import PropTypes from "prop-types";
import { CustomButton, DisplayInput, GarbageCan } from "../../../components";
import { DeliveryValuesModal } from "./";
import { deliveryRowItem } from "../../../data";
import { normalizeString } from "../../../helpers";

/**
 * It is responsible for rendering the dealer information as an item in a table
 * @param {Object} props
 * @param {Object} props.mobil - Contains the information of the delivery person.
 * @param {Number} props.index - the index of each delivery item.
 * @param {Function} props.updateDeliveryField - Updates a specific field of the delivery status.
 * @param {Function} props.toggleModal - Manage the state of the modal.
 * @param {Number} props.showModal - Index of the modal that should be opened.
 * @param {Function} props.setDelivery - Update the state of the delivery people.
 * @param {Function} props.updateDeliveryMetrics -  Updates the metrics of the values and distances.
 * @param {Function} props.setshowModal - Updates the index of the modal that should be displayed
 * @param {Function} props.deletedeliveryByIndex - Eliminates a delivery man by his id.
 * @returns {JSX.Element} Returns a component with the delivery information as a table.
 * 
 * @example
 *  return (
  *  <RowItem
        key={index}
        mobil={mobil}
        index={index}
        updateDeliveryField={updateDeliveryField}
        toggleModal={toggleModal}
        showModal={showModal}
        setDelivery={setDelivery}
        updateDeliveryMetrics={updateDeliveryMetrics}
        setshowModal={setshowModal}
        deletedeliveryByIndex={deletedeliveryByIndex}
      />
 *  )
 */

export const RowItem = ({
  mobil,
  index,
  updateDeliveryField,
  toggleModal,
  showModal,
  setDelivery,
  updateDeliveryMetrics,
  deletedeliveryByIndex,
}) => {
  const { input } = deliveryRowItem;

  return (
    <div className="delivery__row" key={index}>
      <DisplayInput
        value={mobil.nombre}
        setInputValue={(newValue, inputFiel) =>
          updateDeliveryField(setDelivery, newValue, inputFiel, index)
        }
        fieldName={normalizeString(input.name)}
        hiddenLabel={true}
      />
      <DisplayInput
        value={mobil.telefono}
        setInputValue={(newValue, inputFiel) =>
          updateDeliveryField(setDelivery, newValue, inputFiel, index)
        }
        fieldName={normalizeString(input.phoneNumber)}
        hiddenLabel={true}
      />
      <DeliveryValuesModal
        index={index}
        showModal={showModal}
        toggleModal={toggleModal}
        mobil={mobil}
        updateDeliveryMetrics={updateDeliveryMetrics}
        setDelivery={setDelivery}
      />
      <CustomButton onClick={() => deletedeliveryByIndex(index, setDelivery)}>
        <GarbageCan />
      </CustomButton>
    </div>
  );
};

RowItem.propTypes = {
  mobil: PropTypes.shape({
    nombre: PropTypes.string.isRequired,
    telefono: PropTypes.string.isRequired,
    metrics: PropTypes.arrayOf(PropTypes.object).isRequired,
  }).isRequired,
  index: PropTypes.number.isRequired,
  updateDeliveryField: PropTypes.func.isRequired,
  toggleModal: PropTypes.func.isRequired,
  showModal: PropTypes.bool.isRequired,
  setDelivery: PropTypes.func.isRequired,
  updateDeliveryMetrics: PropTypes.func.isRequired,
  deletedeliveryByIndex: PropTypes.func.isRequired,
};
