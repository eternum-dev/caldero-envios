import { Link } from "react-router-dom";
import { introContent } from "../../data";

export const IntroContent = () => {
  const { link, paragraph, title } = introContent;

  return (
    <div className="homePage__wrapper">
      <h2 className="homePage__title">{title}</h2>
      <p className="homePage__p">{paragraph}</p>
      <Link to={"/map"}>
        <button className="homePage__btn">{link.start}</button>
      </Link>
    </div>
  );
};
