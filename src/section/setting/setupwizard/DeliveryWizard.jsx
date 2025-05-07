import { useEffect, useState } from "react";
import { InputField } from "../../../components";
import PropTypes from "prop-types";
import { DeliveryPricingConfig } from "../deliveryman/DeliveryPricingConfig/DeliveryPricingConfig";

export const DeliveryWizard = ({
  wizardData,
  setData,
  setCompletedSection,
  showErrorsSection,
}) => {
  const [errors, setErrors] = useState({});

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

        <DeliveryPricingConfig
          wizardData={wizardData}
          showErrorsSection={showErrorsSection}
          errors={errors}
          setData={setData}
        />
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
