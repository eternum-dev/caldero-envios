import { useContext, useState } from "react";
import { MapContext } from "../../context/map/MapContext";
import {
  updateLocalData,
  addBranches,
  deleteBranchByIndex,
  updateBranchesField,
  updateCoordBranches,
} from "../../helpers";
import { BranchesList } from "../../section";
import {
  CountrySelector,
  Hr,
  ManageActions,
  PageHeader,
  ResultLoaderModal,
} from "../../components";
import "./branches.css";
import { branchesHeader } from "../../data";

export const Branches = () => {
  const { local, setBranches, branches } = useContext(MapContext);
  const [showModal, setShowModal] = useState(null);
  const [showResultLoader, setShowResultLoader] = useState(false);
  const [message, setMessage] = useState("");
  const { title } = branchesHeader;

  const addNewBranches = (event) => {
    event.preventDefault();
    addBranches(setBranches);
  };

  const toggleModal = (id, event) => {
    event && event.preventDefault();
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
    <main className="branches page">
      <PageHeader title={title} />

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
      <Hr />
      <CountrySelector />
      {showResultLoader && (
        <ResultLoaderModal
          message={message}
          closeLoaderModal={() => setShowResultLoader(false)}
        />
      )}
    </main>
  );
};
