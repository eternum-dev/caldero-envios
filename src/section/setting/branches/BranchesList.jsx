import PropTypes from "prop-types";
import { DisplayInput, Modal, CloseButton } from "../../../components";
import { BranchesRowHeader } from "./";
import { branchesList } from "../../../data";

export const BranchesList = ({
  branches = [],
  setBranches,
  showModal,
  toggleModal,
  updateBranchesField,
  updateCoordBranches,
  deleteBranchByIndex,
}) => {
  const { input, modal } = branchesList;

  return (
    <div>
      <BranchesRowHeader />
      {branches &&
        branches.map(({ nombreLocal, numeroLocal, cordenadasLocal }, index) => (
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
            >
              <div>
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
                            modal.nameDoc
                          )
                        }
                      />
                    </div>
                  ))}
                </div>
              </div>
            </Modal>
            <CloseButton
              onClick={() => deleteBranchByIndex(index, setBranches)}
            />
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
      cordenadasLocal: PropTypes.objectOf(PropTypes.string).isRequired,
    })
  ),
  setBranches: PropTypes.func.isRequired,
  showModal: PropTypes.number,
  toggleModal: PropTypes.func.isRequired,
  updateBranchesField: PropTypes.func.isRequired,
  updateCoordBranches: PropTypes.func.isRequired,
  deleteBranchByIndex: PropTypes.func.isRequired,
};
