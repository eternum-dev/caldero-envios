import { useEffect, useState } from "react";
import {
  CloseIcon,
  CustomButton,
  DisplayInput,
  InputField,
  UnitMetricsSelector,
} from "../../../components";
import { HeaderMetrics } from "../deliveryman";
import PropTypes from "prop-types";
import { addMetrics } from "../../../helpers";
import { CheckBoxAdvanceMetrics } from "../../../components/CheckBoxAdvanceMetrics";

export const DeliveryWizard = ({
  wizardData,
  setData,
  setCompletedSection,
  showErrorsSection,
}) => {
  const data = [{ name: "min", distanceKilometers: 0, totalCost: 0 }];
  const unityMetrics = { kilometers: "Kilometros", meters: "metros" };
  const initialValueMetrics = wizardData?.delivery?.metrics || 1000;
  const initialUnitMetrics = wizardData?.delivery?.metrics || 1000;
  const prevDistance = 0;

  const [valueMetrics, setValueMetrics] = useState(initialValueMetrics);
  const [unit, setUnit] = useState(initialUnitMetrics);
  const [errors, setErrors] = useState({});
  const [advanceMetrics, setAdvanceMetrics] = useState(false);

  const validateFields = () => {
    const newErrors = {};
    const { name, phone, delivery } = wizardData;
    const minChacacterDeliveryName = delivery?.name?.trim()?.length < 3;

    if (!name || minChacacterDeliveryName) {
      newErrors.deliveryName = "El nombre debe tener al menos 3 caracteres";
    }

    const phoneRegex = /^\+?\d{7,15}$/;
    if (!phone || phoneRegex.test(delivery?.phone)) {
      newErrors.deliveryPhone = "Ingrese un número de teléfono válido";
    }
    if (!delivery) {
      newErrors.deliveryDistancevalue = "Ingrese una distancia válida";
      newErrors.deliveryDeliveryalue = "Ingrese una valor válido";
      setErrors(newErrors);
      return false;
    }
    if (!delivery?.metrics) return;

    const { value, valueDelivery } = delivery.metrics;
    if (!value) {
      newErrors.deliveryDistancevalue = "Ingrese una distancia válida";
    }
    if (!valueDelivery) {
      newErrors.deliveryDeliveryalue = "Ingrese una distancia válida";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  useEffect(() => {
    const isValid = validateFields();
    setCompletedSection(isValid);
  }, [wizardData.delivery, setCompletedSection]);

  return (
    <div className="brancheswizard">
      <h2 className="brancheswizard__title">agrega un repartidor </h2>

      <form action="" className="wizard__form">
        <InputField
          name="Nombre"
          placeholder="juanito algarrobo"
          type="text"
          value={wizardData?.delivery?.name}
          onChange={(event) =>
            setData((prev) => {
              return {
                ...prev,
                delivery: { ...prev?.delivery, name: event.target.value },
              };
            })
          }
          showError={!!(showErrorsSection && errors?.deliveryName)}
        />
        <InputField
          name="telefono"
          placeholder="+569 59141570"
          type="text"
          value={wizardData?.delivery?.phone}
          onChange={(event) =>
            setData((prev) => {
              return {
                ...prev,
                delivery: { ...prev?.delivery, phone: event.target.value },
              };
            })
          }
          showError={!!(showErrorsSection && !!errors?.deliveryPhone)}
        />

        <div className="valueroutes__wrapper">
          <CheckBoxAdvanceMetrics
            advanceMetrics={advanceMetrics}
            setAdvanceMetrics={setAdvanceMetrics}
          />
          {advanceMetrics ? (
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
                          showError={
                            showErrorsSection && errors?.deliveryDistancevalue
                          }
                          value={valueMetrics}
                          setInputValue={(newValue) => {
                            setData((prev) => {
                              return {
                                ...prev,
                                delivery: {
                                  ...prev?.delivery,
                                  metrics: {
                                    ...prev?.delivery?.metrics,
                                    value: parseFloat(newValue),
                                    unit: unit,
                                  },
                                },
                              };
                            });

                            setValueMetrics(newValue);
                          }}
                          minLength={parseFloat(
                            `${unit === unityMetrics.meters ? 3 : 1}`
                          )}
                          fieldName={"distanceValue"}
                        />
                      </div>
                      <p>Valor</p>
                      <DisplayInput
                        showError={
                          showErrorsSection && errors?.deliveryDeliveryalue
                        }
                        value={`$ ${
                          wizardData?.delivery?.metrics?.valueDelivery ||
                          totalCost
                        }`}
                        setInputValue={(newValue) =>
                          setData((prev) => {
                            return {
                              ...prev,
                              delivery: {
                                ...prev?.delivery,
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
                <CustomButton
                  onClick={() => {
                    addMetrics();
                  }}
                >
                  añadir
                </CustomButton>
              </div>
            </>
          ) : (
            <>
              <h3>Metricas de envios</h3>
              <HeaderMetrics unit={unit} />
              {data
                .sort((a, b) => a.distanceKilometers - b.distanceKilometers)
                ?.map(({ name, totalCost }) => (
                  <div className={`valueroutes__row`} key={name}>
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
                        setInputValue={(newValue) => {
                          setData((prev) => {
                            return {
                              ...prev,
                              delivery: {
                                ...prev?.delivery,
                                metrics: {
                                  ...prev?.delivery?.metrics,
                                  value: parseFloat(newValue),
                                  unit: unit,
                                },
                              },
                            };
                          });

                          setValueMetrics(newValue);
                        }}
                        minLength={parseFloat(
                          `${unit === unityMetrics.meters ? 3 : 1}`
                        )}
                        fieldName={"distanceValue"}
                      />
                    </div>
                    <p>Valor</p>
                    <DisplayInput
                      showError={
                        showErrorsSection && errors?.deliveryDeliveryalue
                      }
                      value={`$ ${
                        wizardData?.delivery?.metrics?.valueDelivery ||
                        totalCost
                      }`}
                      setInputValue={(newValue) =>
                        setData((prev) => {
                          return {
                            ...prev,
                            delivery: {
                              ...prev?.delivery,
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
                  </div>
                ))}
            </>
          )}
        </div>
      </form>
    </div>
  );
};

DeliveryWizard.propTypes = {
  wizardData: PropTypes.object,
  setData: PropTypes.func,
  setCompletedSection: PropTypes.func,
  showErrorsSection: PropTypes.bool,
};
