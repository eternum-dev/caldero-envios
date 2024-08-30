export const addBranches = (setBranches) => {
  setBranches((prev) => [
    ...prev,
    {
      nombreLocal: "Nuevo local",
      cordenadasLocal: { latitud: "", longitud: "" },
      numeroLocal: "",
    },
  ]);
};
