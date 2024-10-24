/**
 * Send a message via WhatsApp to the selected delivery person.
 *
 * @param {string} deliveryPhoneNumber - The phone number of the delivery person to whom the message will be sent.
 * @throws {Error} Throws an error if no delivery person has been selected or if a problem occurs while sending the message.
 */
export const whatsappNotifier = async (deliveryPhoneNumber) => {
  const URL_WHATSAPP_NOTIFIER = import.meta.env.VITE_URL_WHATSAPP_NOTIFIER;

  try {
    if (!deliveryPhoneNumber) {
      console.error("no se ha seleccionado un repartidor");
      return;
    }

    const response = await fetch(URL_WHATSAPP_NOTIFIER, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        to: deliveryPhoneNumber,
        bodyMessage: "Hola, aquí tienes la información del envío.",
      }),
    });
    const result = await response.json();

    if (result.success) {
      alert("Mensaje enviado con éxito!");
    } else {
      alert("Error al enviar el mensaje");
    }
  } catch (error) {
    console.error("error: ", error);
  }
};
