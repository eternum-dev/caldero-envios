import PropTypes from "prop-types";
import { CheckIcon, CustomButton, Hr } from ".";

export const Stepper = ({
  steps,
  currentStep,
  setcurrentStep,
  isCompletedSection,
  setShowErrorsSection,
  completedWizard,
}) => {
  const nextStep = () => {
    const addCounter = 1;

    if (steps.length === currentStep + addCounter) {
      completedWizard();
      return;
    }

    if (isCompletedSection) {
      setcurrentStep((prev) => prev + addCounter);
      setShowErrorsSection(false);
      return;
    }
    setShowErrorsSection(true);
  };

  return (
    <div className="stepper">
      <div className="stepper__wrapper">
        {steps?.map((step, index) => (
          <div key={index} className="stepper__progress">
            <div className="stepper__step">
              <div
                className={`stepper__content ${
                  currentStep === index && "active"
                } ${currentStep > index && "completed"} `}
              >
                {currentStep <= index ? (
                  index + 1
                ) : (
                  <CheckIcon changeColor={currentStep < index} />
                )}
              </div>
              <p className={`stepper__p ${currentStep === index && "active"}`}>
                {step}
              </p>
            </div>
            {index !== steps.length - 1 && (
              <Hr height="6px" color={currentStep > index && "#50CB86"} />
            )}
          </div>
        ))}
      </div>
      <CustomButton onClick={nextStep}>
        {currentStep >= steps.length - 1 ? "completar" : "siguiente"}
      </CustomButton>
    </div>
  );
};

Stepper.propTypes = {
  steps: PropTypes.arrayOf(PropTypes.string).isRequired,
  currentStep: PropTypes.number.isRequired,
  isCompletedSection: PropTypes.bool,
  setcurrentStep: PropTypes.func.isRequired,
  setShowErrorsSection: PropTypes.func.isRequired,
  completedWizard: PropTypes.func.isRequired,
};
