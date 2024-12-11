import "./contactme.css";

export const ContactMe = () => {
  return (
    <footer className="contactme">
      <h2 className="contactme__title">Contacto </h2>
      <p className="contactme__text">
        Tienes dudas, consultas o necesitas atencion tecnica ?
      </p>
      <h3 className="contactme__subtitle">contactame con este correo⬇️</h3>
      <div className="contactme__mail">
        <span>correo.correo@gmail.com</span> <button>✂️</button>
      </div>
    </footer>
  );
};
