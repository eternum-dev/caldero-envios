export const updateInputDistanceValue = (
  setData,
  unit,
  newValue,
  index,
  setValueMetrics
) => {
  setData((prev) => {
    return {
      ...prev,
      delivery: {
        ...prev?.delivery,
        unitMetrics: unit,
        metrics: [
          {
            ...prev?.delivery?.metrics?.[index],
            distanceValue: parseFloat(newValue),
          },
        ],
      },
    };
  });

  setValueMetrics(newValue);
};

export const updateInputValueDelivery = (setData, unit, index, newValue) => {
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

