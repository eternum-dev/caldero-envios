const admin = require("firebase-admin");

const { buildLocalTemplate } = require("./src/buildLocalTemplate");
const { copyUserToBusiness } = require("./src/copyUserToBusiness");
const { sendWhatsAppMessage } = require("./src/sendWhatsAppMessage");

admin.initializeApp();

exports.sendWhatsAppMessage = sendWhatsAppMessage;
exports.copyUserToBusiness = copyUserToBusiness;
exports.buildLocalTemplate = buildLocalTemplate;
