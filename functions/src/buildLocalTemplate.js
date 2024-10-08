const functions = require("firebase-functions");
const admin = require("firebase-admin");

exports.buildLocalTemplate = functions.auth.user().onCreate(async (user) => {
  const userEmail = user.email;
  const userName = user.displayName || "Usuario sin nombre";
  const urlDefaultPicture =
    "https://firebasestorage.googleapis.com/v0/b/caldero-envios.appspot.com/o/defaultUserPicture%2Fperfil.png?alt=media&token=a4d00b30-01c2-4919-ba02-f3801eb5a868";

  try {
    await admin
      .firestore()
      .collection("local")
      .doc(userEmail)
      .set({
        user: {
          name: userName,
          email: userEmail,
          profilePicture: urlDefaultPicture,
        },
        repartidores: [
          {
            nombre: "",
            telefono: "",
            valueDistance: {},
            valueDelivery: {},
          },
        ],
        locales: [
          {
            nombreLocal: "",
            numeroLocal: "",
            cordenadasLocal: {},
          },
        ],
      });

    await admin.firestore().collection("user").doc(userEmail).set({
      name: userName,
      email: userEmail,
      profilePicture: urlDefaultPicture, 
    });

    console.log(`Usuario ${userEmail} se ha creado exitosamente`);
  } catch (error) {
    console.log("error: ", error);
  }
});