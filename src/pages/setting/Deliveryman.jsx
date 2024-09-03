import { useEffect, useState, useContext } from "react";
import { MapContext } from "../../context";
import {
  addDeliveryman,
  updateDeliveryField,
  updateDeliveryMetrics,
  updateLocalData,
  deletedeliveryByIndex,
} from "../../helpers/";
import { FormHeader, RowItem } from "../../section";
import { ManageActions, Hr } from "../../components";
import "./deliveryman.css";

export const Deliveryman = () => {
  const [delivery, setDelivery] = useState(null);
  const [showModal, setshowModal] = useState(false);
  const { local } = useContext(MapContext);

  useEffect(() => {
    if (local) {
      setDelivery(local.repartidores);
    }
  }, [local]);

  const toggleModal = (id, event) => {
    event.preventDefault();
    setshowModal((prev) => (prev === id ? null : id));
  };

  const addNewDelivery = (event) => {
    event.preventDefault();
    addDeliveryman(setDelivery);
  };

  const updateDelivery = async (event) => {
    event.preventDefault();
    await updateLocalData(local, delivery, "repartidores");
  };

  return (
    <div className="delivery">
      <h1>Deliveryman</h1>
      <Hr />
      <form action="" className="delivery__form">
        <FormHeader />
        {delivery &&
          delivery.map((mobil, index) => (
            <RowItem
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
          ))}
        <ManageActions addItem={addNewDelivery} saveChanges={updateDelivery} />
      </form>
    </div>
  );
};
