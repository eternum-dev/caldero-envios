import { useContext, useState } from "react";
import { MapContext } from "../context/map/MapContext";

export const useForm = ({ inputRef }) => {
  const {
    setRenderRoute,
    setDestination,
    localCoordinates,
    setDeliveryPhoneNumber,
    setLocalCoordinates,
    setNameLocal,
    nameLocal,
    branches,
    repartidorSelected,
    setRepartidorSelected,
    repartidor,
  } = useContext(MapContext);

  const [errorInput, setErrorInput] = useState(false);
  const [errorRepartidor, setErrorRepartidor] = useState(false);
  const [errorLocalCoordinates, setErrorLocalCoordinates] = useState(false);

  const onSelectLocal = (event) => {
    const newSeletedBranch = event.target.value;

    if (newSeletedBranch === "seleccionar") {
      setNameLocal(newSeletedBranch);
      return;
    }

    const currentBranch = branches.filter(
      ({ nombreLocal }) => nombreLocal === newSeletedBranch
    )[0];

    setNameLocal(newSeletedBranch);
    setLocalCoordinates(currentBranch.coordenadasLocal);
  };

  const onSelectRepartidor = (event) => {
    const newSeletedDeliveryman = event.target.value;
    if (newSeletedDeliveryman === "seleccionar") {
      setRepartidorSelected(newSeletedDeliveryman);
      return;
    }

    const [deliverySelected] = repartidor.filter(
      ({ nombre }) => nombre === newSeletedDeliveryman
    );

    setRepartidorSelected(deliverySelected);
    setDeliveryPhoneNumber(deliverySelected?.telefono);
  };

  const triggerError = (setErrorFunc) => {
    setErrorFunc(true);
    setTimeout(() => {
      setErrorFunc(false);
    }, 600);
  };

  const validateInput = () => {
    if (inputRef.current.value.length <= 10) {
      triggerError(setErrorInput);
      return false;
    }
    if (nameLocal === "" || nameLocal === "seleccionar") {
      triggerError(setErrorLocalCoordinates);
      return false;
    }
    if (repartidorSelected === "" || repartidorSelected === "seleccionar") {
      triggerError(setErrorRepartidor);
      return false;
    }

    return true;
  };

  const showErrorMessage = () => {
    if (!nameLocal && !repartidorSelected) {
      return {
        status: true,
        message: "no hay repartidores y  locales agregados",
      };
    }
    if (!nameLocal) {
      return {
        status: true,
        message: "no hay locales agregados",
      };
    }
    if (!repartidorSelected) {
      return {
        status: true,
        message: "no hay repartidores agregados agregados",
      };
    }
    return false;
  };

  const onSubmitForm = (event) => {
    event.preventDefault();

    if (!validateInput()) return;
    setDestination(inputRef.current.value);
    setRenderRoute(true);
  };

  const onSubmitInputAutocomplete = (event) => {
    event.preventDefault();

    if (inputRef.current.value.length <= 10) return;
  };

  return {
    errorInput,
    errorRepartidor,
    errorLocalCoordinates,
    onSubmitForm,
    onSelectRepartidor,
    onSelectLocal,
    valueNameLocal: nameLocal,
    valueRepartidor: repartidorSelected,
    valueLocalCordinates: localCoordinates,
    onSubmitInputAutocomplete,
    showErrorMessage,
  };
};
