// import { Map, Marker } from "@vis.gl/react-google-maps";
import { InputAutoComplete } from "../../../components";
import { useRef, useState } from "react";
import { useForm } from "../../../helpers";
import PropTypes from "prop-types";
import Map, { Marker } from "react-map-gl/mapbox";
import "mapbox-gl/dist/mapbox-gl.css";

export const ModalBranchesLocation = ({
  coordinates,
  changeCoordinates,
  wizardData,
  showError,
}) => {
  const inputRef = useRef(null);
  const { errorInput } = useForm({ inputRef });
  const [changeZoom, setChangeZoom] = useState(false);

  const handleCoordinatesChange = (coord) => {
    setChangeZoom(true);
    changeCoordinates(coord);
  };
  const apiKeyMapbox = import.meta.env.VITE_MAPBOX_TOKEN;

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
        initialViewState={{
          longitude: coordinates.lng,
          latitude: coordinates.lat,
          zoom: changeZoom ? 16 : 14,
        }}
        mapboxAccessToken={apiKeyMapbox}
        style={{ width: "100%", height: "400px" }}
        mapStyle="mapbox://styles/mapbox/streets-v11"
      >
        <Marker longitude={coordinates.lng} latitude={coordinates.lat}  />
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
