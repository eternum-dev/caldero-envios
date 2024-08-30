import { useContext, useEffect, useState } from "react";
import { CustomButton } from "../../components/CustomButton";
import { DisplayInput } from "../../components/DisplayInput";
import { Hr } from "../../components/Hr";
import "./branches.css";
import { MapContext } from "../../context/map/MapContext";
import { Modal } from "../../components/Modal";
import { updateLocalData } from "../../helpers/updateLocalData";
import { addBranches } from "../../helpers/branches/addBranches";
import {
  deleteBranchByIndex,
  updateBranchesField,
  updateCoordBranches,
} from "../../helpers/branches/branchesStateUtils";

export const Branches = () => {
  const [branches, setBranches] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const { local } = useContext(MapContext);

  useEffect(() => {
    if (local) {
      setBranches(local.locales);
    }
  }, [local]);

  const addNewBranches = (event) => {
    event.preventDefault();
    addBranches(setBranches);
  };

  const toggleModal = (id, event) => {
    event.preventDefault();
    setShowModal((prev) => (prev === id ? null : id));
  };

  const updateBranches = () => {
    updateLocalData(local, branches, "locales");
  };

  return (
    <div className="branches">
      <h1>Branches</h1>
      <Hr />
      <form action="">
        <div className="branches__row branches__row--header">
          <span>Nombre</span>
          <span>Numero</span>
          <span>ubicacion</span>
        </div>
        {branches &&
          branches.map(
            ({ nombreLocal, numeroLocal, cordenadasLocal }, index) => (
              <div className="branches__row" key={index}>
                <DisplayInput
                  value={nombreLocal}
                  setInputValue={(newValue, inputFiel) =>
                    updateBranchesField(newValue, inputFiel, setBranches, index)
                  }
                  fieldName="nombreLocal"
                />
                <DisplayInput
                  value={numeroLocal}
                  setInputValue={(newValue, inputFiel) =>
                    updateBranchesField(newValue, inputFiel, setBranches, index)
                  }
                  fieldName="numeroLocal"
                />

                <Modal
                  triggerContent={"coord"}
                  toggleModal={(event) => toggleModal(index, event)}
                  showModal={showModal === index}
                  styleButton={true}
                >
                  <div>
                    <div className="branches__header">
                      <h3>geolocalizacion </h3>
                      <CustomButton onClick={() => setShowModal(false)}>
                        cerrar
                      </CustomButton>
                    </div>
                    <div className="branches__modal">
                      {Object.entries(cordenadasLocal).map(
                        (coor, coordIndex) => (
                          <div key={coordIndex}>
                            <p>{coor[0]}</p>
                            <DisplayInput
                              value={coor[1]}
                              fieldName={coor[0]}
                              setInputValue={(newValue, inputField) =>
                                updateCoordBranches(
                                  newValue,
                                  inputField,
                                  setBranches,
                                  index,
                                  "cordenadasLocal"
                                )
                              }
                            />
                          </div>
                        )
                      )}
                    </div>
                  </div>
                </Modal>
                <CustomButton
                  onClick={() => deleteBranchByIndex(index, setBranches)}
                >
                  x
                </CustomButton>
              </div>
            )
          )}

        <CustomButton size="fit-content" onClick={addNewBranches}>
          añadir
        </CustomButton>
        <CustomButton onClick={() => updateBranches()}>guardar</CustomButton>
      </form>
    </div>
  );
};
