import { useContext, useRef, useState } from "react";
import { MapContext } from "../context";
import { InputAutoComplete, Loader } from "./";
import { useForm } from "../helpers";
import "./formComponent.css";
import { formComponent as formData } from "../data";

export const FormComponent = () => {
  const { local } = useContext(MapContext);
  const [selectLocales, setselectLocales] = useState("");
  const inputRef = useRef(null);
  const { errorInput, errorRepartidor, onSelectRepartidor, onSubmitForm } =
    useForm({ inputRef });

  const { branches, buttonSubmit, deliveryman, direction } = formData;
  if (!local) {
    return (
      <form className="formComponent formComponent__loader">
        <Loader />
      </form>
    );
  }

  const { repartidores, locales } = local;
  const onChangeLocal = (event) => {
    setselectLocales(event.target.value);
  };

  return (
    <form className="formComponent">
      <label htmlFor="direccion" className="formComponent__direccion">
        {direction.label}
        <InputAutoComplete inputRef={inputRef} errorInput={errorInput} />
      </label>
      <label htmlFor="local" className="formComponent__local">
        {branches.label}
        <select
          name="local"
          className={`formComponent__select`}
          onChange={onChangeLocal}
          value={selectLocales}
        >
          <option value="seleccionar">{branches.defaultOption}</option>
          {locales &&
            locales.map(({ nombreLocal = "" }) => (
              <option value={nombreLocal} key={nombreLocal}>
                {nombreLocal}
              </option>
            ))}
        </select>
      </label>
      <label htmlFor="repartidor" className="formComponent__repartidor">
        {deliveryman.label}
        <select
          name="repartidor"
          className={`formComponent__select ${
            errorRepartidor ? "error-animation" : ""
          }`}
          value={"repartidor"}
          onChange={onSelectRepartidor}
        >
          <option value="seleccionar">{deliveryman.defaultOption}</option>
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
        {buttonSubmit}
      </button>
    </form>
  );
};
