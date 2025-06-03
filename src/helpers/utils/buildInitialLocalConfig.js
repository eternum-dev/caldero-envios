export const buildInitialLocalConfig = (wizardData, user) => {
  const defaultUser =
    "https://firebasestorage.googleapis.com/v0/b/caldero-envios.appspot.com/o/defaultUserPicture%2Fperfil.png?alt=media&token=a4d00b30-01c2-4919-ba02-f3801eb5a868";

  return {
    repartidores: [
      {
        nombre: wizardData.delivery.name || wizardData.name,
        telefono: wizardData.delivery.phone || wizardData.phone,
        metrics: 
          wizardData?.delivery?.metrics.map((prev) => ({
            distanceKilometers: prev.distanceValue,
            totalCost: prev.valueDelivery,
          })),
        
      },
    ],
    locales: [
      {
        numeroLocal: wizardData.localphone || wizardData.phone,
        coordenadasLocal: wizardData.cord.cord,
        nombreLocal: wizardData.localName,
      },
    ],
    user: {
      email: user.email,
      name: wizardData.name,
      profilePicture: defaultUser,
      initialSetupCompleted: true,
      country: wizardData.country,
    },
  };
};
