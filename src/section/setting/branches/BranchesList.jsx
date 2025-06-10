import { useContext, useRef, useState } from "react";
import { Map, Marker } from "@vis.gl/react-google-maps";
import PropTypes from "prop-types";
import {
  DisplayInput,
  Modal,
  CustomButton,
  GarbageCan,
  InputAutoComplete,
  AddLocationIcon,
} from "../../../components";
import { BranchesRowHeader } from "./";
import { branchesList } from "../../../data";
import { generateId, useForm } from "../../../helpers";
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

  const handleCoordinatesChange = (coord) => {
    setCoordinates(coord);
  };

  const mapId = "map-get-coordinates";
  return (
    <div>
      <BranchesRowHeader />
      {branches?.map(
        ({ nombreLocal, numeroLocal, coordenadasLocal }, index) => (
          <div className="branches__row" key={generateId()}>
            <DisplayInput
              value={nombreLocal}
              setInputValue={(newValue, inputFiel) =>
                updateBranchesField(newValue, inputFiel, setBranches, index)
              }
              fieldName={input.name}
              hiddenLabel={true}
            />
            <DisplayInput
              value={numeroLocal}
              setInputValue={(newValue, inputFiel) =>
                updateBranchesField(newValue, inputFiel, setBranches, index)
              }
              fieldName={input.number}
              hiddenLabel={true}
            />
            <Modal
              triggerContent={<AddLocationIcon width="24" height="24" />}
              toggleModal={(event) => toggleModal(index, event)}
              showModal={showModal === index}
              styleButton={true}
              title={modal.title}
              borderError={false}
              right={"-5rem"}
            >
              <div className="branches__map">
                <div className="branches__container-map">
                  <strong>
                    Latitud:
                    <span>{coordinates?.lat || coordenadasLocal.lat}</span>
                  </strong>
                  <strong>
                    Longitud:
                    <span>{coordinates?.lng || coordenadasLocal.lng}</span>
                  </strong>
                </div>
                <form className="branches__form">
                  <label>
                    <InputAutoComplete
                      inputRef={inputRef}
                      errorInput={errorInput}
                      onCoordinatesChange={handleCoordinatesChange}
                    />
                  </label>
                  <CustomButton
                    type="submit"
                    onClick={onSubmitInputAutocomplete}
                  >
                    enviar
                  </CustomButton>
                </form>
                <Map
                  className="branchMap"
                  id={mapId}
                  zoom={18}
                  center={coordinates || coordenadasLocal || localCoordinates}
                  gestureHandling={"greedy"}
                  disableDefaultUI={true}
                >
                  <Marker
                    position={
                      coordinates || coordenadasLocal || localCoordinates
                    }
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
            <CustomButton
              onClick={() => deleteBranchByIndex(index, setBranches)}
            >
              <GarbageCan />
            </CustomButton>
          </div>
        )
      )}
    </div>
  );
};

BranchesList.propTypes = {
  branches: PropTypes.arrayOf(
    PropTypes.shape({
      nombreLocal: PropTypes.string.isRequired,
      numeroLocal: PropTypes.string.isRequired,
      coordenadasLocal: PropTypes.objectOf(PropTypes.number || PropTypes.number)
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
