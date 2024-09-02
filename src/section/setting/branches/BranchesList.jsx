import PropTypes from "prop-types";
import { CustomButton, DisplayInput, Modal } from "../../../components";

export const BranchesList = ({
  branches,
  setBranches,
  showModal,
  toggleModal,
  updateBranchesField,
  updateCoordBranches,
  deleteBranchByIndex,
}) => (
  <div>
    <div className="branches__row branches__row--header">
      <span>Nombre</span>
      <span>Numero</span>
      <span>Ubicacion</span>
    </div>
    {branches &&
      branches.map(({ nombreLocal, numeroLocal, cordenadasLocal }, index) => (
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
                <h3>Geolocalización</h3>
                <CustomButton onClick={() => toggleModal(null)}>
                  Cerrar
                </CustomButton>
              </div>
              <div className="branches__modal">
                {Object.entries(cordenadasLocal).map((coor, coordIndex) => (
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
                ))}
              </div>
            </div>
          </Modal>
          <CustomButton onClick={() => deleteBranchByIndex(index, setBranches)}>
            x
          </CustomButton>
        </div>
      ))}
  </div>
);
BranchesList.propTypes = {
  branches: PropTypes.arrayOf(
    PropTypes.shape({
      nombreLocal: PropTypes.string.isRequired,
      numeroLocal: PropTypes.string.isRequired,
      cordenadasLocal: PropTypes.objectOf(PropTypes.number).isRequired,
    })
  ).isRequired,
  setBranches: PropTypes.func.isRequired,
  showModal: PropTypes.number,
  toggleModal: PropTypes.func.isRequired,
  updateBranchesField: PropTypes.func.isRequired,
  updateCoordBranches: PropTypes.func.isRequired,
  deleteBranchByIndex: PropTypes.func.isRequired,
};
