import PropTypes from "prop-types";
import { Modal } from "../../../components/";
import { DeliveryMetrics } from "./Metrics";
import { deliveryValuesModal } from "../../../data";
import { addMetrics, deleteMetricsByIndex } from "../../../helpers";

export const DeliveryValuesModal = ({
  index,
  showModal,
  toggleModal,
  mobil,
  updateDeliveryMetrics,
  setDelivery,
}) => {
  const {
    metrics: { meters },
    title,
    triggerContent,
  } = deliveryValuesModal;

  return (
    <Modal
      triggerContent={triggerContent}
      toggleModal={(event) => {
        toggleModal(index, event);
      }}
      right="-5rem"
      styleButton={true}
      showModal={showModal}
      title={title}
      borderError={true}
    >
      <div className="valueroutes">
        <div className="valueroutes__header"></div>
        <DeliveryMetrics
          title={meters.title}
          data={mobil.metrics}
          currentIndex={index}
          updateMetrics={(newValue, inputFiel, indexUpdate) =>
            updateDeliveryMetrics(
              setDelivery,
              newValue,
              inputFiel,
              indexUpdate,
              "metrics"
            )
          }
          addMetrics={() => addMetrics(setDelivery, "metrics", index)}
          deleteMetricsByIndex={(metricsIndex) =>
            deleteMetricsByIndex(setDelivery, "metrics", index, metricsIndex)
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
    metrics: PropTypes.arrayOf(PropTypes.object).isRequired,
  }).isRequired,
  updateDeliveryMetrics: PropTypes.func.isRequired,
  setDelivery: PropTypes.func.isRequired,
};
