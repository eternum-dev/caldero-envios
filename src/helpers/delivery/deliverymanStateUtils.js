export const updateDeliveryMetrics = (
  setDelivery,
  newValue,
  fieldName,
  index,
  currentItem
) => {
  setDelivery((prev) =>
    prev.map((item, i) =>
      i === index
        ? {
            ...item,
            [currentItem]: {
              ...item[currentItem],
              [fieldName]: newValue * 1,
            },
          }
        : item
    )
  );
};

export const updateDeliveryField = (setDelivery, newValue, fieldName, index) => {
  setDelivery((prev) =>
    prev.map((item, i) =>
      i === index ? { ...item, [fieldName]: newValue } : item
    )
  );
};
