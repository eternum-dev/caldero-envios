export const addBranches = (setBranches) => {
  setBranches((prev) => [
    ...prev,
    {
      nombreLocal: "Nuevo local",
      coordenadasLocal: { lat: 0, lng: 0 },
      numeroLocal: "",
    },
  ]);
};
