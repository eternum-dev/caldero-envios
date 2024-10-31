export const updateDeliveryMetrics = (
  setDelivery,
  newValue,
  fieldName,
  index,
  currentItem
) => {
  setDelivery((prev) =>
    prev.map((item) => ({
      ...item,
      [currentItem]: item[currentItem].map((field, i) =>
        index === i ? { ...field, [fieldName]: newValue } : field
      ),
    }))
  );
};

export const updateDeliveryField = (
  setDelivery,
  newValue,
  fieldName,
  index
) => {
  setDelivery((prev) =>
    prev.map((item, i) =>
      i === index ? { ...item, [fieldName]: newValue } : item
    )
  );
};

export const deletedeliveryByIndex = (indexToDelete, setBranches) => {
  setBranches((prev) => prev.filter((_, index) => index !== indexToDelete));
};

export const deleteMetricsByIndex = (
  setDelivery,
  currentItem,
  index,
  indexMetrics
) => {
  setDelivery((prev) => {
    const newState = prev.map((item, indexDelivery) =>
      indexDelivery === index
        ? {
            ...item,
            [currentItem]: item[currentItem].filter((_, i) => {
              return i !== indexMetrics;
            }),
          }
        : item
    );

    return newState;
  });
};

export const addMetrics = (setDelivery, currentItem, index) => {
  setDelivery((prev) =>
    prev.map((item, indexDelivery) =>
      indexDelivery === index
        ? {
            ...item,
            [currentItem]: [
              ...item[currentItem],
              { name: "nuevo item", totalCost: 10, distanceKilometers: 10 },
            ],
          }
        : item
    )
  );
};
