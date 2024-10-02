import { useContext, useRef } from "react";
import { MapContext } from "../context";
import { CustomButton, InputAutoComplete, Loader, SendWhatsAppIcon } from "./";
import { useForm, whatsappNotifier } from "../helpers";
import "./formComponent.css";
import { formComponent as formData } from "../data";

export const FormComponent = () => {
  const { local } = useContext(MapContext);
  const inputRef = useRef(null);
  const {
    errorInput,
    errorRepartidor,
    errorLocalCoordinates,
    valueRepartidor,
    onSelectLocal,
    onSelectRepartidor,
    onSubmitForm,
    valueNameLocal,
  } = useForm({ inputRef });

  const { branches, buttonSubmit, deliveryman, direction } = formData;

  if (!local) {
    return (
      <form className="formComponent formComponent__loader">
        <Loader />
      </form>
    );
  }
  const { repartidores, locales } = local;
  const sendWhatappMessage = async (event) => {
    event.preventDefault();
    whatsappNotifier();
  };
  
  if(!repartidores && !locales) return; 

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
          className={`formComponent__select ${
            errorLocalCoordinates ? "error-animation" : ""
          }`}
          onChange={onSelectLocal}
          value={valueNameLocal}
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
          value={valueRepartidor}
          onChange={onSelectRepartidor}
        >
          <option value="seleccionar">{deliveryman.defaultOption}</option>
          {repartidores.map((deliman, index) => (
            <option
              key={index}
              value={!deliman.nombre ? "otro nombre" : deliman.nombre}
            >
              {!deliman.nombre ? "otro nombre" : deliman.nombre}
            </option>
          ))}
        </select>
      </label>

      <CustomButton type="submit" onClick={onSubmitForm}>
        {buttonSubmit}
      </CustomButton>

      <SendWhatsAppIcon onClick={sendWhatappMessage} />
    </form>
  );
};
