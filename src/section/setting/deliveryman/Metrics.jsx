import PropTypes from "prop-types";
import { CloseIcon, CustomButton, DisplayInput } from "../../../components";
import { generateId } from "../../../helpers";
import { HeaderMetrics } from "./HeaderMetrics";

export const DeliveryMetrics = ({
  data,
  updateMetrics,
  addMetrics,
  deleteMetricsByIndex,
}) => {
  let prevDistance = 0;

  const handlePrevDistance = (distance) => {
    prevDistance = distance + 1;
  };

  return (
    <div className="valueroutes__wrapper">
      <HeaderMetrics />
      <div className="valueroutes__container-row">
        {data
          .sort((a, b) => a.distanceKilometers - b.distanceKilometers)
          ?.map(({ name, distanceKilometers, totalCost }, index) => (
            <div className="valueroutes__row" key={generateId()}>
              <span className="valueroutes__columname">{prevDistance}</span>
              <span className="valueroutes__between">-</span>
              <DisplayInput
                value={distanceKilometers * 1}
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
              {handlePrevDistance(distanceKilometers)}
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
