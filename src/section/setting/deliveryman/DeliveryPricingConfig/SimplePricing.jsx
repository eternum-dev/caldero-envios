import { DisplayInput, UnitMetricsSelector } from "../../../../components";
import { simplePricing } from "../../../../data";
import { HeaderMetrics } from "../HeaderMetrics";
import PropTypes from "prop-types";

export const SimplePricing = ({
  metricsData,
  setValueMetrics,
  showErrorsSection,
  errors,
  valueMetrics,
  unit,
  setUnit,
  updateDistanceValue,
  updateValueDelivery,
}) => {
  const { defaultPreviousDistance, labelDistance, labelValue, meters, title } =
    simplePricing;
  const minLengthInput = parseFloat(`${unit === meters ? 3 : 1}`);

  return (
    <>
      <h3>{title}</h3>
      <HeaderMetrics unit={unit} />
      {metricsData
        .sort((a, b) => a.distanceKilometers - b.distanceKilometers)
        ?.map(
          (_, index) =>
            index === 0 && (
              <div className={`valueroutes__row`} key={index}>
                <p>{labelDistance}</p>
                <div className="valueroutes__columname">
                  <UnitMetricsSelector
                    unit={unit}
                    setUnit={setUnit}
                    setValue={setValueMetrics}
                  />

                  <span>{defaultPreviousDistance} -</span>
                  <DisplayInput
                    showError={
                      showErrorsSection && errors?.deliveryDistancevalue
                    }
                    value={valueMetrics}
                    setInputValue={(newValue) =>
                      updateDistanceValue(newValue, index)
                    }
                    minLength={minLengthInput}
                    hiddenLabel={true}
                    fieldName={"distanceValue"}
                  />
                </div>
                <p>{labelValue}</p>
                <DisplayInput
                  showError={showErrorsSection && errors?.deliveryDeliveryalue}
                  value={`$ ${metricsData?.[index].totalCost}`}
                  setInputValue={(newValue) =>
                    updateValueDelivery(newValue, index)
                  }
                  fieldName={"valueDelivery"}
                  hiddenLabel={true}
                />
              </div>
            )
        )}
    </>
  );
};

SimplePricing.propTypes = {
  metricsData: PropTypes.any,
  showErrorsSection: PropTypes.any,
  errors: PropTypes.any,
  setValueMetrics: PropTypes.any,
  valueMetrics: PropTypes.any,
  unit: PropTypes.any,
  setUnit: PropTypes.any,
  updateDistanceValue: PropTypes.any,
  updateValueDelivery: PropTypes.any,
};
