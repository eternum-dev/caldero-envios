import { Link } from "react-router-dom";
import { NavBar } from "../components/";
import "./header.css";

export const Header = () => {
  return (
    <div className="header">
      <Link to="/" className="header__title">
        <h1>caldero envios</h1>
      </Link>
      
      <NavBar />
    </div>
  );
};
