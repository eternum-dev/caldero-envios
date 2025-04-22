import PropTypes from "prop-types";
import "./checkBoxAdvanceMetrics.css";

export const CheckBoxAdvanceMetrics = ({
  advanceMetrics,
  setAdvanceMetrics,
}) => {
  return (
    <label htmlFor="" className="checkboxmetrics">
      {"Metrica avanzada"}
      <input
        type="checkbox"
        name="typemetrics"
        id=""
        value={advanceMetrics}
        onChange={() => setAdvanceMetrics((prev) => !prev)}
      />
    </label>
  );
};

CheckBoxAdvanceMetrics.propTypes = {
  advanceMetrics: PropTypes.bool.isRequired,
  setAdvanceMetrics: PropTypes.func.isRequired,
};
