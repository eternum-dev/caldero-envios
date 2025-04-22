import { useContext, useState } from "react";
import { Stepper } from "../../components/Stepper";
import "./setupWizard.css";
import {
  BranchesWizard,
  DeliveryWizard,
  OtherWizard,
} from "../../section/setting/setupwizard";
import { AuthContext, MapContext } from "../../context";
import { buildInitialLocalConfig } from "../../helpers";

export const SetupWizard = () => {
  const [indexCurrentStep, setIndexCurrentStep] = useState(0);
  const [wizardData, setWizardData] = useState(null);
  const [isCompletedSection, setIsCompletedSection] = useState(false);
  const steps = ["userConfig", "sucursal", "repartidor"];
  const [showErrorsSection, setShowErrorsSection] = useState(false);

  const { setLocal } = useContext(MapContext);
  const { user } = useContext(AuthContext);

  const saveInitialSetup = () => {
    setLocal(buildInitialLocalConfig(wizardData, user));
  };

  const stepsComponent = [
    <OtherWizard
      key={steps[0]}
      wizardData={wizardData}
      setData={setWizardData}
      setCompletedSection={setIsCompletedSection}
      showErrorsSection={showErrorsSection}
      setShowErrorsSection={setShowErrorsSection}
    />,

    <BranchesWizard
      key={steps[1]}
      wizardData={wizardData}
      setData={setWizardData}
      isCompletedSection={isCompletedSection}
      setCompletedSection={setIsCompletedSection}
      showErrorsSection={showErrorsSection}
      setShowErrorsSection={setShowErrorsSection}
    />,

    <DeliveryWizard
      key={steps[3]}
      wizardData={wizardData}
      setData={setWizardData}
      isCompletedSection={isCompletedSection}
      setCompletedSection={setIsCompletedSection}
      showErrorsSection={showErrorsSection}
      setShowErrorsSection={setShowErrorsSection}
    />,
  ];

  return (
    <div className="page setupwizard">
      <h1>{"Configuracion Inicial"}</h1>
      <>{stepsComponent[indexCurrentStep]}</>
      <Stepper
        currentStep={indexCurrentStep}
        steps={steps}
        setcurrentStep={setIndexCurrentStep}
        isCompletedSection={isCompletedSection}
        setShowErrorsSection={setShowErrorsSection}
        completedWizard={saveInitialSetup}
      />
    </div>
  );
};
