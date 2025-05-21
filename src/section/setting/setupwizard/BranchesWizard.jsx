import { useEffect, useState } from "react";
import { InputField } from "../../../components";
import { ModalBranchesLocation } from "./ModalBranchesLocation";
import PropTypes from "prop-types";

export const BranchesWizard = ({
  wizardData,
  setData,
  setCompletedSection,
  showErrorsSection,
}) => {
  useEffect(() => {
    setData((prev) => {
      return { ...prev, localPhone: prev.phone };
    });
  }, []);

  const [errors, setErrors] = useState({});
  /**
   * Default coordinates pointing to Santiago, the capital city of Chile.
   *
   * @constant {Object} defaultCords
   * @property {number} defaultCords.lat - Latitude of the default location (-33.45).
   * @property {number} defaultCords.lng - Longitude of the default location (-70.6667).
   *
   * Used as fallback coordinates when no location is selected by the user.
   */
  const defaultCords = {
    lat: -33.45,
    lng: -70.6667,
  };
  const validateFields = () => {
    const newErrors = {};

    const { localName, phone, localPhone } = wizardData;
    const minChacacterlocalName = localName?.trim()?.length < 3;

    if (!localName || minChacacterlocalName) {
      newErrors.localName = "El nombre debe tener al menos 3 caracteres";
    }

    const phoneRegex = /^\+?\d{7,15}$/;
    if (!phone || !phoneRegex.test(phone)) {
      if (!localPhone || !phoneRegex.test(localPhone)) {
        newErrors.localPhone = "Ingrese un número de teléfono válido";
      }
    }
    if (!wizardData?.cord?.cord) {
      newErrors.cord = "Seleccione un país válido";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  useEffect(() => {
    const isValid = validateFields();
    setCompletedSection(isValid);
  }, [wizardData, setCompletedSection]);

  return (
    <div className="brancheswizard">
      <h2 className="brancheswizard__title">Crea tu local </h2>

      <form action="" className="wizard__form">
        <InputField
          name="Nombre Empresa"
          placeholder="Uber Eat"
          type="text"
          value={wizardData?.localName || ""}
          onChange={(event) =>
            setData((prev) => {
              return { ...prev, localName: event.target.value };
            })
          }
          showError={!!(showErrorsSection && errors?.localName)}
        />
        <InputField
          name="Telefono"
          placeholder="+569 87654321"
          type="text"
          value={wizardData?.localPhone}
          onChange={(event) =>
            setData((prev) => {
              return { ...prev, localPhone: event.target.value };
            })
          }
          showError={!!(showErrorsSection && errors?.localPhone)}
        />

        <ModalBranchesLocation
          showError={!!(showErrorsSection && errors?.cord)}
          coordinates={wizardData?.cord?.cord || defaultCords}
          changeCoordinates={(newCord) =>
            setData((prev) => {
              return {
                ...prev,
                cord: { ...prev.cord, cord: newCord },
              };
            })
          }
          wizardData={wizardData}
        />
      </form>
    </div>
  );
};

BranchesWizard.propTypes = {
  wizardData: PropTypes.object,
  setData: PropTypes.func,
  setCompletedSection: PropTypes.func,
  showErrorsSection: PropTypes.bool,
};
