import PropTypes from "prop-types";
import "./unitMetricsSelector.css";

export const UnitMetricsSelector = ({ unit, setUnit, setValue }) => {
  const unityMetrics = { kilometers: "Kilometros", meters: "metros" };

  const handleSelectMetrics = (event) => {
    const selectedUnit = event.currentTarget.value;
    setUnit(selectedUnit);

    if (selectedUnit === unityMetrics.meters) {
      setValue((prev) => prev * 1000);
      return;
    } else {
      setValue((prev) => prev / 1000);
      return;
    }
  };

  return (
    <select
      name="typeMetrics"
      id="typeMetrics"
      className="unitmetrics"
      onChange={handleSelectMetrics}
      value={unit}
    >
      <option value={unityMetrics.meters}>{unityMetrics.meters}</option>
      <option value={unityMetrics.kilometers}>{unityMetrics.kilometers}</option>
    </select>
  );
};

UnitMetricsSelector.propTypes = {
  unit: PropTypes.string.isRequired,
  setUnit: PropTypes.func.isRequired,
  setValue: PropTypes.func.isRequired,
};
