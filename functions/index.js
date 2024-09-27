const functions = require("firebase-functions");
const twilio = require("twilio");

const corsOptions = {
  origin: ["http://localhost:5173"],
  methods: ["POST"],
  allowedHeaders: ["Content-Type"],
};
const cors = require("cors")(corsOptions);

const accountSid = functions.config().twilio.account_sid;
const authToken = functions.config().twilio.auth_token;
const client = twilio(accountSid, authToken);

exports.sendWhatsAppMessage = functions.https.onRequest(async (req, res) => {
  cors(req, res, async () => {
    const { to, bodyMessage } = req.body;

    if (!bodyMessage || !to) {
      return res.status(400).send({
        error: `Faltan parámetros: to y bodyMessage son requeridos, to: ${to}, message: ${bodyMessage}`,
      });
    }

    try {
      const message = await client.messages.create({
        body: bodyMessage,
        from: "whatsapp:+14155238886",
        to: `whatsapp:${to}`,
      });

      console.log(message.sid);
      res.status(200).send({ success: true, messageSid: message.sid });
    } catch (error) {
      console.error(error);
      res
        .status(500)
        .send({ error: error.message, to: to, bodyMessage: bodyMessage });
    }
  });
});
