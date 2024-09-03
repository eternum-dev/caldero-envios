import PropTypes from "prop-types";
import { DisplayInput } from "../../../components/DisplayInput";
import { DeliveryValuesModal } from "./DeliveryValuesModal";
import { CustomButton } from "../../../components";

export const RowItem = ({
  mobil,
  index,
  updateDeliveryField,
  toggleModal,
  showModal,
  setDelivery,
  updateDeliveryMetrics,
  setshowModal,
  deletedeliveryByIndex,
}) => (
  <div className="delivery__row" key={index}>
    <DisplayInput
      value={mobil.nombre}
      setInputValue={(newValue, inputFiel) =>
        updateDeliveryField(setDelivery, newValue, inputFiel, index)
      }
      fieldName={"nombre"}
    />
    <DisplayInput
      value={mobil.telefono}
      setInputValue={(newValue, inputFiel) =>
        updateDeliveryField(setDelivery, newValue, inputFiel, index)
      }
      fieldName="telefono"
    />
    <DeliveryValuesModal
      index={index}
      showModal={showModal}
      toggleModal={toggleModal}
      mobil={mobil}
      updateDeliveryMetrics={updateDeliveryMetrics}
      setDelivery={setDelivery}
      setshowModal={setshowModal}
    />
    <CustomButton onClick={() => deletedeliveryByIndex(index, setDelivery)}>
      x
    </CustomButton>
  </div>
);

RowItem.propTypes = {
  mobil: PropTypes.shape({
    nombre: PropTypes.string.isRequired,
    telefono: PropTypes.string.isRequired,
    valueDistance: PropTypes.object.isRequired,
    valueDelivery: PropTypes.object.isRequired,
  }).isRequired,
  index: PropTypes.number.isRequired,
  updateDeliveryField: PropTypes.func.isRequired,
  toggleModal: PropTypes.func.isRequired,
  showModal: PropTypes.bool.isRequired,
  setDelivery: PropTypes.func.isRequired,
  updateDeliveryMetrics: PropTypes.func.isRequired,
  setshowModal: PropTypes.func.isRequired,
  deletedeliveryByIndex: PropTypes.func.isRequired,
};
