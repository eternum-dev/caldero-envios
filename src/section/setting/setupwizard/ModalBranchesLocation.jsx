import { Map, Marker } from "@vis.gl/react-google-maps";
import { InputAutoComplete } from "../../../components";
import { useRef, useState } from "react";
import { useForm } from "../../../helpers";
import PropTypes from "prop-types";

export const ModalBranchesLocation = ({
  coordinates,
  changeCoordinates,
  wizardData,
  showError,
}) => {
  const inputRef = useRef(null);
  const { errorInput } = useForm({ inputRef });
  const mapId = "map-get-coordinates";
  const [changeZoom, setChangeZoom] = useState(false);

  const handleCoordinatesChange = (coord) => {
    setChangeZoom(true);
    changeCoordinates(coord);
  };

  return (
    <div className={`branches__map ${showError && "branches__map--error"}`}>
      <h3>Direccion de sucursal</h3>
      <div className="branches__container-map">
        <strong>
          Latitud:
          <span>{coordinates?.lat}</span>
        </strong>
        <strong>
          Longitud:
          <span>{coordinates?.lng}</span>
        </strong>
      </div>
      <div className="branches__form">
        <label>
          <InputAutoComplete
            inputRef={inputRef}
            errorInput={errorInput}
            onCoordinatesChange={handleCoordinatesChange}
            countryRestrictions={wizardData.country.cca2}
          />
        </label>
      </div>
      <Map
        className="branchMap"
        id={mapId}
        zoom={changeZoom ? 13 : 10}
        center={coordinates}
        gestureHandling={"greedy"}
        disableDefaultUI={true}
      >
        <Marker position={coordinates} />
      </Map>
    </div>
  );
};

ModalBranchesLocation.propTypes = {
  coordinates: PropTypes.objectOf(PropTypes.number),
  changeCoordinates: PropTypes.func,
  wizardData: PropTypes.object,
  showError: PropTypes.bool,
};
