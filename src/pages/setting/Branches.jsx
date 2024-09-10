import { useContext, useEffect, useState } from "react";
import { MapContext } from "../../context/map/MapContext";
import {
  updateLocalData,
  addBranches,
  deleteBranchByIndex,
  updateBranchesField,
  updateCoordBranches,
} from "../../helpers";
import { BranchesHeader, BranchesList } from "../../section";
import "./branches.css";
import { ManageActions, ResultLoaderModal } from "../../components";

export const Branches = () => {
  const [branches, setBranches] = useState(null);
  const [showModal, setShowModal] = useState(null);
  const { local } = useContext(MapContext);
  const [showResultLoader, setShowResultLoader] = useState(false);
  const [message, setMessage] = useState("");

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

  const updateBranches = async (event) => {
    event.preventDefault();
    setMessage("");
    setShowResultLoader(true);

    const branchResponse = await updateLocalData(local, branches, "locales");
    setMessage(branchResponse.message);
  };

  return (
    <div className="branches page">
      <BranchesHeader />
      <form>
        <BranchesList
          branches={branches}
          setBranches={setBranches}
          showModal={showModal}
          toggleModal={toggleModal}
          updateBranchesField={updateBranchesField}
          updateCoordBranches={updateCoordBranches}
          deleteBranchByIndex={deleteBranchByIndex}
        />
        <ManageActions addItem={addNewBranches} saveChanges={updateBranches} />
      </form>
      {showResultLoader && (
        <ResultLoaderModal
          message={message}
          closeLoaderModal={() => setShowResultLoader(false)}
        />
      )}
    </div>
  );
};
