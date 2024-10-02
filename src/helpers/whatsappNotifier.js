export const whatsappNotifier = async () => {
  try {
    const response = await fetch(
      "https://us-central1-caldero-envios.cloudfunctions.net/sendWhatsAppMessage-sendWhatsAppMessage",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          to: "+56959141570",
          bodyMessage: "Hola, aquí tienes la información del envío.",
        }),
      }
    );
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
