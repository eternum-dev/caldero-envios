import {
  CloseIcon,
  CustomButton,
  DisplayInput,
  UnitMetricsSelector,
} from "../../../../components";
import { advancedPricing } from "../../../../data";
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
  metricsData,
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
  const { add, meters, title, labelDistance, labelValue } = advancedPricing;
  const getDistanceRangeStart = (currentIndex) => {
    const previousDistanceByDefault = 0;
    return `${
      metricsData?.[currentIndex - 1]?.distanceValue + 1 ||
      previousDistanceByDefault
    } -`;
  };

  const sortedData = metricsData?.sort(
    (a, b) => a.distanceValue - b.distanceValue
  );

  const previousDistanceValue = metricsData?.[metricsData.length - 1];
  const currentDistanceValue = previousDistanceValue?.distanceValue + 2;
  const minLengthInput = parseFloat(`${unit === meters ? 3 : 1}`);

  return (
    <>
      <h3>{title}</h3>
      <HeaderMetrics isAdvanceMetrics={true} unit={unit} />
      <div className="valueroutes__container-row">
        {sortedData?.map((_, index) => (
          <div
            className={`valueroutes__row valueroutes__row--hidebtn`}
            key={index}
          >
            <p>{labelDistance}</p>
            <div className="valueroutes__columname">
              <UnitMetricsSelector
                unit={unit}
                setUnit={setUnit}
                setValue={setValueMetrics}
              />

              <span>{getDistanceRangeStart(index)}</span>
              <DisplayInput
                showError={showErrorsSection && errors?.deliveryDistancevalue}
                value={metricsData?.[index]?.distanceValue}
                setInputValue={(newValue) =>
                  updateDistanceValue(newValue, index)
                }
                minLength={minLengthInput}
                fieldName={"distanceValue"}
                hiddenLabel={true}
              />
            </div>
            <p>{labelValue}</p>
            <DisplayInput
              showError={showErrorsSection && errors?.deliveryDeliveryalue}
              value={`$ ${metricsData?.[index].valueDelivery}`}
              setInputValue={(newValue) => updateValueDelivery(newValue, index)}
              fieldName={"valueDelivery"}
              hiddenLabel={true}
            />
            <CustomButton onClick={() => deleteMetrics(setData, unit, index)}>
              <CloseIcon />
            </CustomButton>
          </div>
        ))}
        <CustomButton
          onClick={() => addAdvanceMetrics(setData, currentDistanceValue)}
        >
          {add}
        </CustomButton>
      </div>
    </>
  );
};

AdvancedPricing.propTypes = {
  metricsData: PropTypes.object,
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
