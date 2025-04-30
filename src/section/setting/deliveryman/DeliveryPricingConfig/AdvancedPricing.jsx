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
  data,
  setData,
  setValueMetrics,
  showErrorsSection,
  errors,
  valueMetrics,
  unit,
  setUnit,
}) => {
  const meters = "Metros";
  const prevDistance = 0;
  console.log(wizardData);
  return (
    <>
      <h3>Metricas avanzadas</h3>
      <HeaderMetrics isAdvanceMetrics={true} unit={unit} />
      <div className="valueroutes__container-row">
        {data
          .sort((a, b) => a.distanceKilometers - b.distanceKilometers)
          ?.map(({ name, totalCost }) => (
            <div
              className={`valueroutes__row valueroutes__row--hidebtn`}
              key={name}
            >
              <p>Distancia</p>
              <div className="valueroutes__columname">
                <UnitMetricsSelector
                  unit={unit}
                  setUnit={setUnit}
                  setValue={setValueMetrics}
                />

                <span>{prevDistance} -</span>
                <DisplayInput
                  showError={showErrorsSection && errors?.deliveryDistancevalue}
                  value={valueMetrics}
                  setInputValue={(newValue) => {
                    setData((prev) => {
                      return {
                        ...prev,
                        delivery: {
                          ...prev?.delivery,
                          unitMetrics: unit,
                          metrics: {
                            ...prev?.delivery?.metrics,
                            value: parseFloat(newValue),
                          },
                        },
                      };
                    });

                    setValueMetrics(newValue);
                  }}
                  minLength={parseFloat(`${unit === meters ? 3 : 1}`)}
                  fieldName={"distanceValue"}
                />
              </div>
              <p>Valor</p>
              <DisplayInput
                showError={showErrorsSection && errors?.deliveryDeliveryalue}
                value={`$ ${
                  wizardData?.delivery?.metrics?.valueDelivery || totalCost
                }`}
                setInputValue={(newValue) =>
                  setData((prev) => {
                    return {
                      ...prev,
                      delivery: {
                        ...prev?.delivery,
                        unitMetrics: unit,
                        metrics: {
                          ...prev?.delivery?.metrics,
                          valueDelivery: parseFloat(
                            newValue.slice(1, newValue.lenght)
                          ),
                        },
                      },
                    };
                  })
                }
                fieldName={"valueDelivery"}
              />
              <CustomButton
                onClick={() => {
                  console.log("borrado");
                }}
              >
                <CloseIcon />
              </CustomButton>
            </div>
          ))}
        <CustomButton onClick={() => console.log("añadido")}>
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
};
