import PropTypes from "prop-types";
import { Modal } from "../../../components/";
import { DeliveryMetrics } from "./Metrics";
import { deliveryValuesModal } from "../../../data";

export const DeliveryValuesModal = ({
  index,
  showModal,
  toggleModal,
  mobil,
  updateDeliveryMetrics,
  setDelivery,
}) => {
  const {
    metrics: { meters, rates },
    title,
    triggerContent,
  } = deliveryValuesModal;

  return (
    <Modal
      triggerContent={triggerContent}
      toggleModal={(event) => {
        toggleModal(index, event);
      }}
      styleButton={true}
      showModal={showModal === index}
      title={title}
    >
      <div className="valueroutes">
        <div className="valueroutes__header"></div>
        <DeliveryMetrics
          title={meters.title}
          data={mobil.valueDistance}
          updateMetrics={(newValue, inputFiel) =>
            updateDeliveryMetrics(
              setDelivery,
              newValue,
              inputFiel,
              index,
              meters.docName
            )
          }
        />
        <DeliveryMetrics
          title={rates.title}
          data={mobil.valueDelivery}
          updateMetrics={(newValue, inputFiel) =>
            updateDeliveryMetrics(
              setDelivery,
              newValue,
              inputFiel,
              index,
              rates.docName
            )
          }
        />
      </div>
    </Modal>
  );
};

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
};
