export const addBranches = (setBranches) => {
  setBranches((prev) => [
    ...prev,
    {
      nombreLocal: "Nuevo local",
      cordenadasLocal: { lat: 0, lng: 0 },
      numeroLocal: "",
    },
  ]);
};
