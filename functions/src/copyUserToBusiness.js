const functions = require("firebase-functions");
const admin = require("firebase-admin");

admin.initializeApp();

exports.copyUserToBusiness = functions.firestore
  .document("usuarios/{userId}")
  .onUpdate((change, context) => {
    const userData = change.after.data(); 
    const userId = context.params.userId;

    const businessRef = admin.firestore().collection("local").doc(userId);

    const businessData = {
      user: {
        name: userData.name,
        email: userData.email,
        profileImage: userData.profileImage || "",
      },
    };

    return businessRef.update(businessData);
  });
