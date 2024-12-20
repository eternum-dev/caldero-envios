import { ContactMe } from "../../components/ContactMe";
import {
  AboutCaldero,
  ImageContent,
  IntroContent,
  Membership,
  SinglePay,
} from "../../section/home";
import "./homePage.css";

export const HomePage = () => {
  return (
    <main className="homePage page">
      <div className="home-page__content">
        <IntroContent />
        <ImageContent />
      </div>
      <AboutCaldero />
      <div className="home-page__prices">
        <SinglePay />
        <Membership />
      </div>
      <ContactMe />
    </main>
  );
};
