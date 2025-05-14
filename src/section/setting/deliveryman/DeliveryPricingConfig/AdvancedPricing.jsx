import {
  CloseIcon,
  CustomButton,
  DisplayInput,
  UnitMetricsSelector,
} from "../../../../components";
import { HeaderMetrics } from "../HeaderMetrics";
import PropTypes from "prop-types";

/**
 * AdvancedPricing component renders an interface to manage advanced delivery pricing metrics.
 * It allows the user to input distance ranges and corresponding delivery prices dynamically.
 * This component supports metric unit switching and error highlighting.
 *
 * @component
 * @param {Object} props - Component props
 * @param {Object} props.wizardData - Full form data including delivery metrics
 * @param {Function} props.setData - Setter for updating the wizard data
 * @param {Function} props.setValueMetrics - Setter for metric values (distance/value)
 * @param {boolean} props.showErrorsSection - Flag to show validation errors
 * @param {Object} props.errors - Object containing form validation errors
 * @param {string} props.unit - Current unit of measurement ('Metros' or other)
 * @param {Function} props.setUnit - Function to change the measurement unit
 * @param {Function} props.updateDistanceValue - Function to update a distance value by index
 * @param {Function} props.updateValueDelivery - Function to update a delivery price by index
 * @param {Function} props.addAdvanceMetrics - Function to add a new advanced metric
 * @param {Function} props.deleteMetrics - Function to delete a metric by index
 *
 * @example
 * <AdvancedPricing
 *   wizardData={data}
 *   setData={setData}
 *   setValueMetrics={setValueMetrics}
 *   showErrorsSection={true}
 *   errors={errors}
 *   unit="Metros"
 *   setUnit={setUnit}
 *   updateDistanceValue={updateDistanceValue}
 *   updateValueDelivery={updateValueDelivery}
 *   addAdvanceMetrics={addAdvanceMetrics}
 *   deleteMetrics={deleteMetrics}
 * />
 */

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
  addAdvanceMetrics,
  deleteMetrics,
}) => {
  const meters = "Metros";
  const getDistanceRangeStart = (currentIndex) => {
    const previousDistanceByDefault = 0;
    return `${
      wizardData?.delivery?.metrics?.[currentIndex - 1]?.distanceValue + 1 ||
      previousDistanceByDefault
    } -`;
  };

  const previousDistanceValue =
    wizardData?.delivery?.metrics?.[wizardData?.delivery?.metrics.length - 1];
  const currentDistanceValue = previousDistanceValue?.distanceValue + 2;
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
              <CustomButton onClick={() => deleteMetrics(setData, unit, index)}>
                <CloseIcon />
              </CustomButton>
            </div>
          ))}
        <CustomButton
          onClick={() => addAdvanceMetrics(setData, currentDistanceValue)}
        >
          añadir
        </CustomButton>
      </div>
    </>
  );
};

AdvancedPricing.propTypes = {
  wizardData: PropTypes.object,
  setData: PropTypes.func,
  showErrorsSection: PropTypes.bool,
  errors: PropTypes.object,
  setValueMetrics: PropTypes.func,
  unit: PropTypes.string,
  setUnit: PropTypes.func,
  updateDistanceValue: PropTypes.func,
  updateValueDelivery: PropTypes.func,
  deleteMetrics: PropTypes.func,
  addAdvanceMetrics: PropTypes.func,
};
