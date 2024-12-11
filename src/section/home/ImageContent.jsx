import { imageContent } from "../../data";

export const ImageContent = () => {
  const { url, alt } = imageContent;

  return (
    <section className="homePage__wrapper--image">
      <img className="homePage__image" src={url} alt={alt} />
    </section>
  );
};
