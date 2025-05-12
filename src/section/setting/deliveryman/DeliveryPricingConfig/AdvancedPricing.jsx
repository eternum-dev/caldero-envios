import {
  CloseIcon,
  CustomButton,
  DisplayInput,
  UnitMetricsSelector,
} from "../../../../components";
import { HeaderMetrics } from "../HeaderMetrics";
import PropTypes from "prop-types";

export const AdvancedPricing = ({
  wizardData,
  setData,
  setValueMetrics,
  showErrorsSection,
  errors,
  unit,
  setUnit,
  updateDistanceValue,
  updateValueDelivery,
}) => {
  const meters = "Metros";
  const getDistanceRangeStart = (currentIndex) => {
    return `${
      wizardData?.delivery?.metrics?.[currentIndex - 1]?.distanceValue + 1 || 0
    } -`;
  };

  const prevMetrics =
    wizardData?.delivery?.metrics?.[wizardData?.delivery?.metrics.length - 1];

  const minLengthInput = parseFloat(`${unit === meters ? 3 : 1}`);

  return (
    <>
      <h3>Metricas avanzadas</h3>
      <HeaderMetrics isAdvanceMetrics={true} unit={unit} />
      <div className="valueroutes__container-row">
        {wizardData.delivery.metrics
          .sort((a, b) => a.distanceValue - b.distanceValue)
          ?.map((_, index) => (
            <div
              className={`valueroutes__row valueroutes__row--hidebtn`}
              key={index}
            >
              <p>Distancia</p>
              <div className="valueroutes__columname">
                <UnitMetricsSelector
                  unit={unit}
                  setUnit={setUnit}
                  setValue={setValueMetrics}
                />

                <span>{getDistanceRangeStart(index)}</span>
                <DisplayInput
                  showError={showErrorsSection && errors?.deliveryDistancevalue}
                  value={wizardData?.delivery?.metrics?.[index]?.distanceValue}
                  setInputValue={(newValue) =>
                    updateDistanceValue(newValue, index)
                  }
                  minLength={minLengthInput}
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
              <CustomButton
                onClick={() => {
                  setData((prev) => {
                    return {
                      ...prev,
                      delivery: {
                        ...prev?.delivery,
                        unitMetrics: unit,
                        metrics: prev.delivery.metrics.filter(
                          (_, currentIndex) => currentIndex !== index
                        ),
                      },
                    };
                  });
                }}
              >
                <CloseIcon />
              </CustomButton>
            </div>
          ))}
        <CustomButton
          onClick={() =>
            setData((prev) => {
              return {
                ...prev,
                delivery: {
                  ...prev.delivery,
                  metrics: [
                    ...(prev?.delivery?.metrics || []),
                    {
                      valueDelivery: 0,
                      distanceValue: prevMetrics.distanceValue + 2,
                    },
                  ],
                },
              };
            })
          }
        >
          añadir
        </CustomButton>
      </div>
    </>
  );
};

AdvancedPricing.propTypes = {
  wizardData: PropTypes.any,
  setData: PropTypes.any,
  showErrorsSection: PropTypes.any,
  errors: PropTypes.any,
  data: PropTypes.any,
  setValueMetrics: PropTypes.any,
  valueMetrics: PropTypes.any,
  unit: PropTypes.any,
  setUnit: PropTypes.any,
  updateDistanceValue: PropTypes.any,
  updateValueDelivery: PropTypes.any,
};
