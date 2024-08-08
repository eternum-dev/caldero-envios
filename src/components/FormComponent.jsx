import { useContext, useRef } from "react";
import "./formComponent.css";
import { InputAutoComplete } from "./InputAutoComplete";
// import { MapContext } from '../context/MapContext';
import { useForm } from "../helpers/useForm";
import { MapContext } from "../context/map/MapContext";

export const FormComponent = () => {
  //
  const { localCoordinates, local } = useContext(MapContext);
  const inputRef = useRef(null);
  const {
    errorInput,
    errorRepartidor,
    onSelectLocal,
    onSelectRepartidor,
    onSubmitForm,
  } = useForm({ inputRef });

  if (!local) {
    return <form className="formComponent"></form>;
  }

  const { repartidores, locales } = local;

  return (
    <form className="formComponent">
      <label htmlFor="direccion" className="formComponent__direccion">
        Direccion
        <InputAutoComplete inputRef={inputRef} errorInput={errorInput} />
      </label>
      <label htmlFor="local" className="formComponent__local">
        Envios
        <select
          name="local"
          className={`formComponent__select`}
          onChange={onSelectLocal}
          value={localCoordinates}
        >
          <option value="seleccionar">Selecciona un local</option>
          {locales.map((local) => (
            <option value={local} key={local}>
              {local}
            </option>
          ))}
        </select>
      </label>
      <label htmlFor="repartidor" className="formComponent__repartidor">
        Repartidor
        <select
          name="repartidor"
          className={`formComponent__select ${
            errorRepartidor ? "error-animation" : ""
          }`}
          value={"repartidor"}
          onChange={onSelectRepartidor}
        >
          <option value="seleccionar"> selecciona un repartidor </option>
          {repartidores.map((deliman, index) => {
            return (
              <option key={index} value={`${deliman.nombre}`}>
                {deliman.nombre}
              </option>
            );
          })}
        </select>
      </label>

      <button
        type="submit"
        className="formComponent__button"
        onClick={onSubmitForm}
      >
        calcular
      </button>
    </form>
  );
};
