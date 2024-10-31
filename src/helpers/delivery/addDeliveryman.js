export const addDeliveryman = (setDelivery) => {
  setDelivery((prev) => {
    return [
      ...prev,
      {
        nombre: "",
        telefono: "",
        metrics: [
          { name: "min", totalCost: 0, distanceKilometers: 0 },
          { name: "mid", totalCost: 0, distanceKilometers: 0 },
          { name: "max", totalCost: 0, distanceKilometers: 0 },
        ],
      },
    ];
  });
};
