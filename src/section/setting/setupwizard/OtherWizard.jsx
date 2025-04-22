import { useEffect, useState } from "react";
import { CountrySelector, InputField } from "../../../components";
import PropTypes from "prop-types";

export const OtherWizard = ({
  wizardData = {},
  setData,
  setCompletedSection,
  showErrorsSection,
}) => {
  const [errors, setErrors] = useState({});

  const handleFormState = (currentKey, currentValue) => {
    setData((prev) => {
      return {
        ...prev,
        [currentKey]: currentValue,
      };
    });
  };

  const validateFields = () => {
    const newErrors = {};
    if (!wizardData) {
      newErrors.phone = "Ingrese un número de teléfono";
      newErrors.name = "ingrese su nombre";
      newErrors.country = "Seleccione un país ";

      setErrors(newErrors);
      return false;
    }

    const { name, phone, country } = wizardData;
    const minChacacterName = name?.trim()?.length < 3;

    if (!name || minChacacterName) {
      newErrors.name = "El nombre debe tener al menos 3 caracteres";
    }

    const phoneRegex = /^\+?\d{7,15}$/;
    if (!phone || !phoneRegex.test(phone)) {
      newErrors.phone = "Ingrese un número de teléfono válido";
    }

    if (!country) {
      newErrors.country = "Seleccione un país válido";
    }

    setErrors(newErrors);
    const isValid = Object.keys(newErrors).length === 0;

    return isValid;
  };

  // console.log(errors);
  useEffect(() => {
    const isValid = validateFields();
    setCompletedSection(isValid);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [wizardData, setCompletedSection]);

  return (
    <div className="brancheswizard">
      <h2 className="brancheswizard__title">Configura tu perfil </h2>

      <form action="" className="wizard__form">
        <InputField
          showError={!!(showErrorsSection && errors?.name)}
          name="Nombre"
          placeholder="juanito algarrobo"
          type="text"
          onChange={(event) => {
            handleFormState("name", event.target.value);
            handleFormState("delivery", { name: event.target.value });
          }}
          value={wizardData?.name || ""}
        />

        <InputField
          name="Telefono"
          showError={showErrorsSection && !!errors?.phone}
          placeholder="+569 59141570"
          type="text"
          value={wizardData?.phone || ""}
          onChange={(event) => {
            handleFormState("phone", parseInt(event.target.value));
            handleFormState("localPhone", parseInt(event.target.value));
            handleFormState("delivery", {
              ...wizardData.delivery,
              phone: parseInt(event.target.value),
            });
          }}
        />
        <CountrySelector
          showError={showErrorsSection && !!errors?.country}
          setCountry={(cord) => handleFormState("country", cord)}
          wizardData={wizardData}
        />
      </form>
    </div>
  );
};

OtherWizard.propTypes = {
  wizardData: PropTypes.object,
  setCompletedSection: PropTypes.func,
  setData: PropTypes.func,
  showErrorsSection: PropTypes.bool,
  setShowErrorsSection: PropTypes.func,
};
