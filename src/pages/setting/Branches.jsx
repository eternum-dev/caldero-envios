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
import { ManageActions } from "../../components";

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
      <ManageActions addItem={addNewBranches} saveChanges={updateBranches}/>
      </form>
    </div>
  );
};
