import PropTypes from "prop-types";
import { DisplayInput } from "../../../components";

export const DeliveryMetrics = ({ title, data, updateMetrics }) => (
  <div className="valueroutes__wrapper">
    <h4 className="valueroutes__title">{title}</h4>
    <div className="valueroutes__container-row">
      {Object.entries(data).map((value, index) => (
        <div className="valueroutes__row" key={index}>
          <span className="valueroutes__columname">{value[0]}</span>
          <DisplayInput
            value={`${value[1]}`}
            setInputValue={(newValue, inputFiel) =>
              updateMetrics(newValue, inputFiel)
            }
            fieldName={value[0]}
          />
        </div>
      ))}
    </div>
  </div>
);

DeliveryMetrics.propTypes = {
  title: PropTypes.string.isRequired,
  data: PropTypes.object.isRequired,
  updateMetrics: PropTypes.func.isRequired,
};
