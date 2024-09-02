import mockPage from "../../assets/mockPage.png";

export const ImageContent = () => {
  return (
    <div className="homePage__wrapper--image">
      <img className="homePage__image" src={mockPage} alt="meg" />
    </div>
  );
};
