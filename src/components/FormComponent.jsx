import { useContext, useEffect, useRef } from "react";
import { MapContext } from "../context";
import { CustomButton, InputAutoComplete, Loader } from "./";
import { useForm, generateId } from "../helpers";
import { formComponent as formData } from "../data";
import "./formComponent.css";

/**
 * FormComponent component.
 *
 * This component renders a form that allows users:
 * - Select a branch and delivery man.
 * - Send WhatsApp messages.
 *
 * It manages form state and handles submission and errors using a custom hook `useForm`.
 *
 * @component
 * @example
 * return (
 *   <FormComponent />
 * )
 *
 * @returns {JSX.Element} The rendered form component for selecting location, delivery person, and sending WhatsApp messages.
 */

export const FormComponent = () => {
  const {
    setErrorDB,
    repartidor: delivery,
    branches: locales,
    setAddressCoordinates,
  } = useContext(MapContext);

  const inputRef = useRef(null);
  const {
    errorInput,
    errorRepartidor,
    errorLocalCoordinates,
    valueRepartidor,
    valueNameLocal,
    onSelectLocal,
    onSelectRepartidor,
    onSubmitForm,
    showErrorMessage,
  } = useForm({ inputRef });

  const responseShowError = showErrorMessage();

  useEffect(() => {
    setErrorDB(responseShowError.status);
  }, [setErrorDB, responseShowError.status]);

  const { branches, buttonSubmit, deliveryman, direction } = formData;

  if (!delivery) {
    return (
      <form className="formComponent formComponent__loader">
        <Loader />
      </form>
    );
  }

  return (
    <form
      className={`formComponent ${
        responseShowError.status && "formComponent-error "
      }`}
    >
      <label
        htmlFor="direccion"
        className="formComponent__label formComponent__label--direccion"
      >
        {direction.label}
        <InputAutoComplete
          inputRef={inputRef}
          errorInput={errorInput}
          onCoordinatesChange={setAddressCoordinates}
        />
      </label>
      <label
        htmlFor="local"
        className="formComponent__label formComponent__label--local"
      >
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
            locales.map(({ nombreLocal }) => (
              <option value={nombreLocal} key={generateId()}>
                {nombreLocal}
              </option>
            ))}
        </select>
      </label>
      <label
        htmlFor="repartidor"
        className="formComponent__label formComponent__label--repartidor"
      >
        {deliveryman.label}
        <select
          name="repartidor"
          className={`formComponent__select ${
            errorRepartidor ? "error-animation" : ""
          }`}
          onChange={onSelectRepartidor}
          value={valueRepartidor?.nombre}
        >
          <option value="seleccionar">{deliveryman.defaultOption}</option>
          {delivery.map((deliman) => (
            <option key={generateId()} value={deliman.nombre}>
              {deliman.nombre}
            </option>
          ))}
        </select>
      </label>

      <CustomButton type="submit" onClick={onSubmitForm}>
        {buttonSubmit}
      </CustomButton>

      {responseShowError.status && (
        <div className="formComponent__display-error">
          <p>{responseShowError.message}</p>
        </div>
      )}
    </form>
  );
};
