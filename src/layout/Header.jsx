import { NavBar } from "../components/NavBar";
import "./header.css"

export const Header = () => {
  return (
    <div className="header">
      <h1 className="header__title">caldero envios</h1>
      <NavBar />
    </div>
  );
};
