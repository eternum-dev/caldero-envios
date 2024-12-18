import { Link } from "react-router-dom";
import { introContent } from "../../data";

export const IntroContent = () => {
  const { link, paragraph, title } = introContent;

  return (
    <section className="homePage__wrapper">
      <h2 className="homePage__title">{title}</h2>
      <p className="homePage__p">{paragraph}</p>
      <Link to={link.path}>
        <button className="homePage__btn">{link.start}</button>
      </Link>
    </section>
  );
};
