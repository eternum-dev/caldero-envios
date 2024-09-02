import { ImageContent, IntroContent } from "../../section/home";
import "./homePage.css";

export const HomePage = () => {
  return (
    <div className="homePage">
      <IntroContent />
      <ImageContent />
    </div>
  );
};
