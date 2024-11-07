import { Link } from "react-router-dom";
import { NavBar } from "../components/";
import { headerData } from "../data";
import "./header.css";

export const Header = () => {
  const { title } = headerData;

  return (
    <div className="header">
      <Link to="/" className="header__title">
        <h1>{title.h1}</h1>
        <span>{title.span}</span>
      </Link>

      <NavBar />
    </div>
  );
};
