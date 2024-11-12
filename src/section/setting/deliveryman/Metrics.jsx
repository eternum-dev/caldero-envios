import { useState } from "react";
import PropTypes from "prop-types";
import { CloseIcon, CustomButton, DisplayInput } from "../../../components";
import { generateId } from "../../../helpers";

export const DeliveryMetrics = ({
  title,
  data,
  updateMetrics,
  addMetrics,
  deleteMetricsByIndex,
}) => {
  const [columName, setColumName] = useState("");

  return (
    <div className="valueroutes__wrapper">
      <h4 className="valueroutes__title">{title}</h4>
      <div className="valueroutes__container-row">
        {data
          .sort((a, b) => a.distanceKilometers - b.distanceKilometers)
          ?.map(({ name, distanceKilometers, totalCost }, index) => (
            <div className="valueroutes__row" key={generateId()}>
              <input
                type="text"
                className="valueroutes__columname"
                value={columName || name}
                onChange={(event) => setColumName(event.target.value)}
              />
              <DisplayInput
                value={distanceKilometers}
                setInputValue={(newValue) =>
                  updateMetrics(
                    newValue * 1,
                    Object.keys({ distanceKilometers }),
                    index
                  )
                }
                fieldName={name}
              />
              <DisplayInput
                value={totalCost * 1}
                setInputValue={(newValue) =>
                  updateMetrics(newValue, Object.keys({ totalCost }), index)
                }
                fieldName={name}
              />
              <CustomButton onClick={() => deleteMetricsByIndex(index)}>
                <CloseIcon />
              </CustomButton>
            </div>
          ))}
        <CustomButton
          onClick={() => {
            addMetrics();
          }}
        >
          eliminar
        </CustomButton>
      </div>
    </div>
  );
};

DeliveryMetrics.propTypes = {
  title: PropTypes.string.isRequired,
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  updateMetrics: PropTypes.func.isRequired,
  addMetrics: PropTypes.func.isRequired,
  deleteMetricsByIndex: PropTypes.func.isRequired,
};
