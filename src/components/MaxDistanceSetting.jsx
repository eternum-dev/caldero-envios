import { useContext, useRef, useState } from "react";
import { CustomButton } from "./CustomButton";
import { MapContext } from "../context";
import "./maxDistanceSetting.css";

export const MaxDistanceSetting = () => {
  const { maxKilometers, setMaxKilometers } = useContext(MapContext);
  const [error, setError] = useState(null);
  const inputRef = useRef();

  const isValidateDistance =
    !isNaN(inputRef?.current?.value) & (inputRef?.current?.value?.length > 0);

  const onChangeInput = () => {
    if (isValidateDistance) {
      setMaxKilometers(inputRef.current.value);
      setError(null);
      return;
    }
    setError("no es un numero");
  };

  return (
    <section className="maxdistance">
      <h3 className="maxdistance__title">distancia maxima de una ruta </h3>
      <div className="maxdistance__wrapper">
        <form className="maxdistance__form">
          <label htmlFor="maxdistance" className="maxdistance__label">
            <input name="maxdistance" type="text" ref={inputRef} />
            <span className="maxdistance__errormesaje"> {error}</span>
          </label>
          <CustomButton onClick={onChangeInput}>guardar distancia</CustomButton>
        </form>
        <div className="maxdistance__display">
          <span className="maxdistance__span">{maxKilometers}</span>
          {!isNaN(maxKilometers) && "  kilometros"}
        </div>
      </div>
    </section>
  );
};
