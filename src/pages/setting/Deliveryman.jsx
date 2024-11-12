import { useState, useContext } from "react";
import { MapContext } from "../../context";
import {
  addDeliveryman,
  updateDeliveryField,
  updateDeliveryMetrics,
  updateLocalData,
  deletedeliveryByIndex,
  generateId,
} from "../../helpers/";
import { FormHeader, RowItem } from "../../section";
import { ManageActions, ResultLoaderModal, PageHeader } from "../../components";
import { deliveryData } from "../../data";
import "./deliveryman.css";

export const Deliveryman = () => {
  const [showModal, setshowModal] = useState(false);
  const [showResultLoader, setShowResultLoader] = useState(false);
  const [message, setMessage] = useState("");
  const {
    local,
    repartidor: delivery,
    setRepartidor: setDelivery,
  } = useContext(MapContext);
  const { title, docItem } = deliveryData;

  const toggleModal = (id, event) => {
    event && event.preventDefault();
    setshowModal((prev) => (prev === id ? null : id));
  };

  const addNewDelivery = (event) => {
    event.preventDefault();
    addDeliveryman(setDelivery);
  };

  const updateDelivery = async (event) => {
    event.preventDefault();
    setMessage("");
    setShowResultLoader((prev) => !prev);

    const deliveryResponse = await updateLocalData(local, delivery, docItem);

    setMessage(deliveryResponse.message);
  };

  return (
    <div className="delivery page">
      <PageHeader title={title} />

      <form action="" className="delivery__form">
        <FormHeader />
        {delivery &&
          delivery.map((mobil, index) => (
            <RowItem
              key={generateId()}
              mobil={mobil}
              index={index}
              updateDeliveryField={updateDeliveryField}
              toggleModal={toggleModal}
              showModal={showModal === index}
              setDelivery={setDelivery}
              updateDeliveryMetrics={updateDeliveryMetrics}
              setshowModal={setshowModal}
              deletedeliveryByIndex={deletedeliveryByIndex}
            />
          ))}
        <ManageActions addItem={addNewDelivery} saveChanges={updateDelivery} />
        {showResultLoader && (
          <ResultLoaderModal
            message={message}
            closeLoaderModal={setShowResultLoader}
          />
        )}
      </form>
    </div>
  );
};
