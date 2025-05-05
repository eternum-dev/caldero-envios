import { useState } from "react";
import PropTypes from "prop-types";
import { CheckBoxAdvanceMetrics } from "../../../../components/CheckBoxAdvanceMetrics";
import { AdvancedPricing } from "./AdvancedPricing";
import { SimplePricing } from "./SimplePricing";

export const DeliveryPricingConfig = ({
  wizardData,
  setData,
  showErrorsSection,
  errors,
}) => {
  const unityMetrics = { kilometers: "Kilometros", meters: "Metros" };
  const initialUnitMetrics =
    wizardData?.delivery?.metrics || unityMetrics.meters;
  const [unit, setUnit] = useState(initialUnitMetrics);
  const data = [{ name: "", distanceKilometers: 0, totalCost: 0 }];
  const [showAdvanceMetrics, setShowAdvanceMetrics] = useState(false);
  const [valueMetrics, setValueMetrics] = useState(0);

  return (
    <div className="valueroutes__wrapper">
      <CheckBoxAdvanceMetrics
        advanceMetrics={showAdvanceMetrics}
        setAdvanceMetrics={setShowAdvanceMetrics}
      />
      {showAdvanceMetrics ? (
        <AdvancedPricing
          wizardData={wizardData}
          data={data}
          setData={setData}
          setValueMetrics={setValueMetrics}
          showErrorsSection={showErrorsSection}
          errors={errors}
          valueMetrics={valueMetrics}
          unit={unit}
          setUnit={setUnit}
        />
      ) : (
        <SimplePricing
          wizardData={wizardData}
          data={data}
          setData={setData}
          setValueMetrics={setValueMetrics}
          showErrorsSection={showErrorsSection}
          errors={errors}
          valueMetrics={valueMetrics}
          unit={unit}
          setUnit={setUnit}
        />
      )}
    </div>
  );
};

DeliveryPricingConfig.propTypes = {
  wizardData: PropTypes.object,
  setData: PropTypes.func,
  showErrorsSection: PropTypes.bool,
  errors: PropTypes.object,
};
