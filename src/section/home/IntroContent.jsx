import { Link } from "react-router-dom";

export const IntroContent = () => {
  return (
    <div className="homePage__wrapper">
      <h2 className="homePage__title">
        Optimiza tus Envíos y Mejora la Satisfacción de tus Cliente
      </h2>
      <p className="homePage__p">
        Mejora la experiencia de tus clientes optimizando tus costos y tiempos
        de envío con precisión
      </p>
      <Link to={"/map"}>
        <button className="homePage__btn">start trial</button>
      </Link>
    </div>
  );
};
