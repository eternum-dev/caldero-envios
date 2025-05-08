import { DisplayInput, UnitMetricsSelector } from "../../../../components";
import { HeaderMetrics } from "../HeaderMetrics";
import PropTypes from "prop-types";

export const SimplePricing = ({
  wizardData,
  setValueMetrics,
  showErrorsSection,
  errors,
  valueMetrics,
  unit,
  setUnit,
  updateDistanceValue,
  updateValueDelivery,
}) => {
  const prevDistance = 0;
  const meters = "Metros";

  return (
    <>
      <h3>Metricas de envios</h3>
      <HeaderMetrics unit={unit} />
      {wizardData.delivery.metrics
        .sort((a, b) => a.distanceKilometers - b.distanceKilometers)
        ?.map(
          (_, index) =>
            index === 0 && (
              <div className={`valueroutes__row`} key={index}>
                <p>Distancia</p>
                <div className="valueroutes__columname">
                  <UnitMetricsSelector
                    unit={unit}
                    setUnit={setUnit}
                    setValue={setValueMetrics}
                  />

                  <span>{prevDistance} -</span>
                  <DisplayInput
                    showError={
                      showErrorsSection && errors?.deliveryDistancevalue
                    }
                    value={valueMetrics}
                    setInputValue={(newValue) =>
                      updateDistanceValue(newValue, index)
                    }
                    minLength={parseFloat(`${unit === meters ? 3 : 1}`)}
                    fieldName={"distanceValue"}
                  />
                </div>
                <p>Valor</p>
                <DisplayInput
                  showError={showErrorsSection && errors?.deliveryDeliveryalue}
                  value={`$ ${wizardData?.delivery?.metrics?.[index].valueDelivery}`}
                  setInputValue={(newValue) =>
                    updateValueDelivery(newValue, index)
                  }
                  fieldName={"valueDelivery"}
                />
              </div>
            )
        )}
    </>
  );
};

SimplePricing.propTypes = {
  wizardData: PropTypes.any,
  showErrorsSection: PropTypes.any,
  errors: PropTypes.any,
  setValueMetrics: PropTypes.any,
  valueMetrics: PropTypes.any,
  unit: PropTypes.any,
  setUnit: PropTypes.any,
  updateDistanceValue: PropTypes.any,
  updateValueDelivery: PropTypes.any,
};
