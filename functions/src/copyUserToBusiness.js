const functions = require("firebase-functions");
const admin = require("firebase-admin");

const documentUserPath = "usuarios/{userId}";
const collectionBussines = "local";

exports.copyUserToBusiness = functions.firestore
  .document(documentUserPath)
  .onUpdate((change, context) => {
    const userData = change.after.data();
    const userId = context.params.userId;

    const businessRef = admin
      .firestore()
      .collection(collectionBussines)
      .doc(userId);

    const businessData = {
      // TODO: verififcar que datos cambiaron
      // TODO: guardar solo los datos modificados
      user: {
        name: userData.name,
        email: userData.email,
        profilePicture: userData.profilePicture || "",
      },
    };

    return businessRef.update(businessData);
    // TODO: Manejar errores
  });
