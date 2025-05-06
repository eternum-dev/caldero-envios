import { useState } from "react";
import PropTypes from "prop-types";
import { CheckBoxAdvanceMetrics } from "../../../../components/CheckBoxAdvanceMetrics";
import { AdvancedPricing } from "./AdvancedPricing";
import { SimplePricing } from "./SimplePricing";

/**
 * DeliveryPricingConfig component
 * is a configuration  for managing delivery pricing settings.
 *
 * It allows toggling between simple and advanced pricing modes and handles unit selection
 * for distance measurements (kilometers or meters). It conditionally renders either the
 * `AdvancedPricing` or `SimplePricing` component based on user interaction.
 *
 * @component
 * @example
 * return (
 *  <DeliveryWizard
      wizardData={wizardData}
      showErrorsSection={showErrorsSection}
      errors={errors}
      setData={setData}
    />
 * )
 *
 * @param {Object} props - Component props.
 * @param {Object} props.wizardData - Contains initial values and delivery configuration data.
 * @param {Function} props.setData - Function to update the delivery pricing data.
 * @param {boolean} props.showErrorsSection - Flag to display the error section.
 * @param {Object} props.errors - Contains validation or form-related errors.
 *
 * @returns {JSX.Element} The rendered DeliveryPricingConfig component.
 */

export const DeliveryPricingConfig = ({
  wizardData,
  setData,
  showErrorsSection,
  errors,
}) => {
  const unityMetrics = { kilometers: "Kilometros", meters: "Metros" };
  const initialUnitMetrics =
    wizardData?.delivery?.unitMetrics || unityMetrics.meters;
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
