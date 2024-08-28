export const addDeliveryman = (setDelivery) => {
  setDelivery((prev) => {
    return [
      ...prev,
      {
        nombre: "",
        telefono: "",
        valueDelivery: { min: 0, mid: 0, max: 0 },
        valueDistance: { min: 0, mid: 0, max: 0 },
      },
    ];
  });
};
