import { useContext, useState } from "react";
import { MapContext } from "../context/map/MapContext";

export const useForm = ({ inputRef }) => {
  const {
    setRepartidor,
    setRenderRoute,
    setDestination,
    repartidor,
    localCoordinates,
    setNameLocal,
    nameLocal,
  } = useContext(MapContext);

  const [errorInput, setErrorInput] = useState(false);
  const [errorRepartidor, setErrorRepartidor] = useState(false);
  const [errorLocalCoordinates, setErrorLocalCoordinates] = useState(false);

  const onSelectLocal = (event) => {
    const newCoordinates = event.target.value;
    setNameLocal(newCoordinates);
  };

  const onSelectRepartidor = (event) => {
    const newRepartidor = event.target.value;
    setRepartidor(newRepartidor);
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

    showErrorMessage,
  };
};
