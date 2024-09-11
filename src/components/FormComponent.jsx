import { useContext, useRef, useState } from "react";
import { MapContext } from "../context";
import { InputAutoComplete } from "./";
import { useForm } from "../helpers";
import "./formComponent.css";

export const FormComponent = () => {
  const { local } = useContext(MapContext);
  const [selectLocales, setselectLocales] = useState("");
  const inputRef = useRef(null);
  const { errorInput, errorRepartidor, onSelectRepartidor, onSubmitForm } =
    useForm({ inputRef });

  if (!local) {
    return <form className="formComponent"></form>;
  }

  const { repartidores, locales } = local;
  const onChangeLocal = (event) => {
    setselectLocales(event.target.value);
  };
  
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
          onChange={onChangeLocal}
          value={selectLocales}
        >
          <option value="seleccionar">Selecciona un local</option>
          {locales &&
            locales.map(({ nombreLocal = "" }) => (
              <option value={nombreLocal} key={nombreLocal}>
                {nombreLocal}
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
          {repartidores.map((deliman, index) => (
            <option key={index} value={deliman.nombre}>
              {deliman.nombre}
            </option>
          ))}
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
