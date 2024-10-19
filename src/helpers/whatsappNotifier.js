export const whatsappNotifier = async () => {
  const URL_WHATSAPP_NOTIFIER = import.meta.env.VITE_URL_WHATSAPP_NOTIFIER;

  try {
    const response = await fetch(URL_WHATSAPP_NOTIFIER, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        to: "+56959141570",
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
