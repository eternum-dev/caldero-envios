import { useEffect, useState, useContext } from "react";
import { MapContext } from "../../context/map/MapContext";
import { Hr } from "../../components/Hr";
import { DisplayInput } from "../../components/DisplayInput";
import "./deliveryman.css";
import { CustomButton } from "../../components/CustomButton";
import { Modal } from "../../components/Modal";

export const Deliveryman = () => {
  const [delivery, setDelivery] = useState(null);
  const [showModal, setshowModal] = useState(null);
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

    setDelivery((prev) => {
      return [
        ...prev,
        {
          nombre: "juancarlos",
          telefono: "+569 numeroo3",
          valueDelivery: { max: 4000, min: 2000, mid: 3000 },
          valueDistance: { min: 2000, mid: 3000, max: 4050 },
        },
      ];
    });
  };

  const updateInput = (newValue, fieldName, index) => {
    setDelivery((prev) =>
      prev.map((item, i) =>
        i === index ? { ...item, [fieldName]: newValue } : item
      )
    );
  };

  const updateRouteValue = (newValue, fieldName, index, currentItem) => {
    console.log({ newValue, fieldName, index, currentItem });
    setDelivery((prev) =>
      prev.map((item, i) =>
        i === index
          ? {
              ...item,
              [currentItem]: { ...item[currentItem], [fieldName]: newValue },
            }
          : item
      )
    );
  };
  console.log(delivery);
  return (
    <div className="delivery">
      <h1>Deliveryman</h1>
      <Hr />
      <form action="" className="delivery__form">
        <div className="delivery__row delivery__row--header">
          <span>nombre</span>
          <span>numero</span>
          <span>valores</span>
        </div>
        {delivery &&
          delivery.map(
            (mobil, index) => (
              <div className="delivery__row" key={index}>
                <DisplayInput
                  value={mobil.nombre}
                  setInputValue={(newValue, inputFiel) =>
                    updateInput(newValue, inputFiel, index)
                  }
                  fieldName={"nombre"}
                />

                <DisplayInput
                  value={mobil.telefono}
                  setInputValue={(newValue, inputFiel) =>
                    updateInput(newValue, inputFiel, index)
                  }
                  fieldName="telefono"
                />

                <Modal
                  triggerContent={"Valores"}
                  toggleModal={(event) => {
                    toggleModal(index, event);
                  }}
                  styleButton={true}
                  showModal={showModal === index}
                >
                  <div className="valueroutes">
                    <h3>gestion de envios </h3>
                    <div className="valueroutes__wrapper">
                      <h4 className="valueroutes__title">Metros </h4>
                      <div className="valueroutes__container-row">
                        {Object.entries(mobil.valueDistance).map(
                          (value, index2) => (
                            <div className="valueroutes__row" key={index2}>
                              <span className="valueroutes__columname">
                                {value[0]}
                              </span>
                              <DisplayInput
                                value={`${value[1]}`}
                                setInputValue={(newValue, inputFiel) =>
                                  updateRouteValue(
                                    newValue,
                                    inputFiel,
                                    index,
                                    "valueDistance"
                                  )
                                }
                                fieldName={value[0]}
                              />
                            </div>
                          )
                        )}
                      </div>
                    </div>
                    <div className="valueroutes__wrapper">
                      <h4 className="valueroutes__title">Metros </h4>
                      <div className="valueroutes__container-row">
                        {Object.entries(mobil.valueDelivery).map(
                          (value, index) => (
                            <div className="valueroutes__row" key={index}>
                              <span className="valueroutes__columname">
                                {value[0]}
                              </span>
                              <DisplayInput
                                value={`${value[1]}`}
                                setInputValue={(newValue, inputFiel) =>
                                  updateRouteValue(
                                    newValue,
                                    inputFiel,
                                    index,
                                    "valueDelivery"
                                  )
                                }
                                fieldName={value[0]}
                              />
                            </div>
                          )
                        )}
                      </div>
                    </div>
                  </div>
                </Modal>
              </div>
            )
            // ))
          )}
        <CustomButton size="auto" onClick={addNewDelivery}>
          añadir
        </CustomButton>
        <CustomButton onClick={(event) => event.preventDefault()}>
          Guardar
        </CustomButton>
      </form>
    </div>
  );
};
