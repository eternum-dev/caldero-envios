import PropTypes from "prop-types";
import {
  DisplayInput,
  Modal,
  CustomButton,
  GarbageCan,
  InputAutoComplete,
} from "../../../components";
import { BranchesRowHeader } from "./";
import { branchesList } from "../../../data";
import { useContext, useRef, useState } from "react";
import { Map, Marker, useMap } from "@vis.gl/react-google-maps";
import { useForm } from "../../../helpers";
import { MapContext } from "../../../context";

export const BranchesList = ({
  branches = [],
  setBranches,
  showModal,
  toggleModal,
  updateBranchesField,
  deleteBranchByIndex,
}) => {
  const { input, modal } = branchesList;
  const { localCoordinates } = useContext(MapContext);
  const [coordinates, setCoordinates] = useState();

  const inputRef = useRef(null);
  const { errorInput, onSubmitInputAutocomplete } = useForm({ inputRef });

  const handleCoordinatesChange = (coordinates) => {
    setCoordinates(coordinates);
  };

  const mapId = "map-get-coordinates";
  useMap(mapId);
  return (
    <div>
      <BranchesRowHeader />
      {branches?.map(({ nombreLocal, numeroLocal, cordenadasLocal }, index) => (
        <div className="branches__row" key={index}>
          <DisplayInput
            value={nombreLocal}
            setInputValue={(newValue, inputFiel) =>
              updateBranchesField(newValue, inputFiel, setBranches, index)
            }
            fieldName={input.name}
          />
          <DisplayInput
            value={numeroLocal}
            setInputValue={(newValue, inputFiel) =>
              updateBranchesField(newValue, inputFiel, setBranches, index)
            }
            fieldName={input.number}
          />
          <Modal
            triggerContent={modal.triggerContent}
            toggleModal={(event) => toggleModal(index, event)}
            showModal={showModal === index}
            styleButton={true}
            title={modal.title}
            borderError={false}
          >
            <div className="branches__map ">
              <div
                style={{
                  display: "grid",
                  gap: "1rem",
                  gridTemplateColumns: "repeat(2, 1fr)",
                  marginBottom: "1rem",
                }}
              >
                <span>Latittud: {coordinates?.lat || cordenadasLocal.lat}</span>
                <span>Longitud: {coordinates?.lng || cordenadasLocal.lng}</span>
              </div>
              <form className="branches__form">
                <label htmlFor="direccion">
                  <InputAutoComplete
                    inputRef={inputRef}
                    errorInput={errorInput}
                    onCoordinatesChange={handleCoordinatesChange}
                  />
                </label>
                <CustomButton type="submit" onClick={onSubmitInputAutocomplete}>
                  enviar
                </CustomButton>
              </form>
              <Map
                className="branchMap"
                id={mapId}
                zoom={18}
                center={coordinates || cordenadasLocal || localCoordinates}
                gestureHandling={"greedy"}
                disableDefaultUI={true}
              >
                <Marker
                  position={coordinates || cordenadasLocal || localCoordinates}
                />
              </Map>
            </div>
            <CustomButton
              onClick={() =>
                updateBranchesField(
                  coordinates,
                  modal.nameDoc,
                  setBranches,
                  index
                )
              }
            >
              guardar cambios
            </CustomButton>
          </Modal>
          <CustomButton onClick={() => deleteBranchByIndex(index, setBranches)}>
            <GarbageCan />
          </CustomButton>
        </div>
      ))}
    </div>
  );
};

BranchesList.propTypes = {
  branches: PropTypes.arrayOf(
    PropTypes.shape({
      nombreLocal: PropTypes.string.isRequired,
      numeroLocal: PropTypes.string.isRequired,
      cordenadasLocal: PropTypes.objectOf(PropTypes.number || PropTypes.number)
        .isRequired,
    })
  ),
  setBranches: PropTypes.func.isRequired,
  showModal: PropTypes.number,
  toggleModal: PropTypes.func.isRequired,
  updateBranchesField: PropTypes.func.isRequired,
  updateCoordBranches: PropTypes.func.isRequired,
  deleteBranchByIndex: PropTypes.func.isRequired,
};
