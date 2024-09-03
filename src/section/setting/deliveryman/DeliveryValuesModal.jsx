import PropTypes from "prop-types";
import { CustomButton, Modal } from "../../../components/";
import { DeliveryMetrics } from "./Metrics";

export const DeliveryValuesModal = ({
  index,
  showModal,
  toggleModal,
  mobil,
  updateDeliveryMetrics,
  setDelivery,
  setshowModal,
}) => (
  <Modal
    triggerContent={"Valores"}
    toggleModal={(event) => {
      toggleModal(index, event);
    }}
    styleButton={true}
    showModal={showModal === index}
  >
    <div className="valueroutes">
      <div className="valueroutes__header">
        <h3>gestion de envios </h3>
        <CustomButton onClick={() => setshowModal(false)}>cerrar</CustomButton>
      </div>
      <DeliveryMetrics
        title="Metros"
        data={mobil.valueDistance}
        updateMetrics={(newValue, inputFiel) =>
          updateDeliveryMetrics(
            setDelivery,
            newValue,
            inputFiel,
            index,
            "valueDistance"
          )
        }
      />
      <DeliveryMetrics
        title="Tarifas"
        data={mobil.valueDelivery}
        updateMetrics={(newValue, inputFiel) =>
          updateDeliveryMetrics(
            setDelivery,
            newValue,
            inputFiel,
            index,
            "valueDelivery"
          )
        }
      />
    </div>
  </Modal>
);

DeliveryValuesModal.propTypes = {
  index: PropTypes.number.isRequired,
  showModal: PropTypes.bool.isRequired,
  toggleModal: PropTypes.func.isRequired,
  mobil: PropTypes.shape({
    valueDistance: PropTypes.object.isRequired,
    valueDelivery: PropTypes.object.isRequired,
  }).isRequired,
  updateDeliveryMetrics: PropTypes.func.isRequired,
  setDelivery: PropTypes.func.isRequired,
  setshowModal: PropTypes.func.isRequired,
};
