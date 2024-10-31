import { useContext, useState } from "react";
import { MapContext } from "../context/map/MapContext";

export const useForm = ({ inputRef }) => {
  const {
    setRepartidor,
    setRenderRoute,
    setDestination,
    repartidor,
    localCoordinates,
    setDeliveryPhoneNumber,
    setLocalCoordinates,
    setNameLocal,
    nameLocal,
    local,
  } = useContext(MapContext);

  const [errorInput, setErrorInput] = useState(false);
  const [errorRepartidor, setErrorRepartidor] = useState(false);
  const [errorLocalCoordinates, setErrorLocalCoordinates] = useState(false);

  const onSelectLocal = (event) => {
    const newSeletedBranch = event.target.value;
    setNameLocal(newSeletedBranch);

    const [branch] = local.locales.filter(
      ({ nombreLocal }) => nombreLocal === newSeletedBranch
    );
    setLocalCoordinates(branch.cordenadasLocal);
  };

  const onSelectRepartidor = (event) => {
    const newSeletedDeliveryman = event.target.value;
    const [deliverySelected] = local.repartidores.filter(
      ({ nombre }) => nombre === newSeletedDeliveryman
    );
    
    setRepartidor(deliverySelected);
    setDeliveryPhoneNumber(deliverySelected.telefono);
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
    if (repartidor === "" || repartidor === "seleccionar") {
      triggerError(setErrorRepartidor);
      return false;
    }

    return true;
  };

  const showErrorMessage = () => {
    if (!nameLocal && !repartidor) {
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
    if (!repartidor) {
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
    valueRepartidor: repartidor,
    valueLocalCordinates: localCoordinates,
    onSubmitInputAutocomplete,
    showErrorMessage,
  };
};
