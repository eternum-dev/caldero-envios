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

/**
 * SetupWizard component
 * is the main wizard interface for configuring a local business setup.
 *
 * It manages the flow between multiple steps such as general user settings,
 * branch configuration, and delivery settings. The wizard ensures that each section
 * is completed before proceeding, and saves the initial configuration using context providers.
 *
 * @component
 * @example
 * return (
 *   <SetupWizard />
 * )
 *
 * @returns {JSX.Element} The rendered SetupWizard component.
 */

export const SetupWizard = () => {
  const initialWizardData = {
    delivery: { metrics: [{ valueDelivery: 0, distanceValue: 0 }] },
  };
  const [indexCurrentStep, setIndexCurrentStep] = useState(0);
  const [wizardData, setWizardData] = useState(initialWizardData);
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
