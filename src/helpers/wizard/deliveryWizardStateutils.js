export const updateInputValueDeliveryByIndex = (
  setData,
  unit,
  index,
  newValue
) => {
  setData((prev) => {
    return {
      ...prev,
      delivery: {
        ...prev?.delivery,
        unitMetrics: unit,
        metrics: prev.delivery.metrics.map((item, currentIndex) =>
          currentIndex === index
            ? {
                ...prev?.delivery?.metrics?.[index],
                valueDelivery: parseFloat(newValue.slice(1, newValue.lenght)),
              }
            : item
        ),
      },
    };
  });
};

export const updateInputDistanceValueByIndex = (
  setData,
  unit,
  index,
  newValue,
  setValueMetrics
) => {
  setData((prev) => {
    return {
      ...prev,
      delivery: {
        ...prev?.delivery,
        unitMetrics: unit,
        metrics: prev.delivery.metrics.map((item, currentIndex) =>
          currentIndex === index
            ? {
                ...prev?.delivery?.metrics?.[index],
                distanceValue: parseFloat(newValue),
              }
            : item
        ),
      },
    };
  });
  setValueMetrics(newValue);
};

export const deleteAdvanceMetricsByIndex = (setData, unit, index) => {
  setData((prev) => {
    return {
      ...prev,
      delivery: {
        ...prev?.delivery,
        unitMetrics: unit,
        metrics: prev.delivery.metrics.filter(
          (_, currentIndex) => currentIndex !== index
        ),
      },
    };
  });
};

export const addAdvanceMetrics = (setData, currentDistanceValue) => {
  setData((prev) => {
    return {
      ...prev,
      delivery: {
        ...prev.delivery,
        metrics: [
          ...(prev?.delivery?.metrics || []),
          {
            valueDelivery: 0,
            distanceValue: currentDistanceValue,
          },
        ],
      },
    };
  });
};
