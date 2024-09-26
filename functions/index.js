const functions = require("firebase-functions");
const twilio = require("twilio");

// Tus credenciales de Twilio
const accountSid = functions.config().twilio.account_sid;
const authToken = functions.config().twilio.auth_token;
const client = twilio(accountSid, authToken); // Inicializa el cliente de Twilio

exports.sendWhatsAppMessage = functions.https.onRequest(async (req, res) => {
  const { to, bodyMessage } = req.body;

  try {
    const message = await client.messages.create({
      body: bodyMessage,
      from: "whatsapp:+14155238886", // Número de WhatsApp del sandbox de Twilio
      to: `whatsapp: ${to}`, // Número al que enviar el mensaje
    });

    console.log(message.sid);
    res.status(200).send({ success: true, messageSid: message.sid });
  } catch (error) {
    console.error(error);
    res.status(500).send({ error: error.message });
  }
});
