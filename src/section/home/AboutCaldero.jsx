import { CoreValues, Hr } from "../../components";

export const AboutCaldero = () => {
  return (
    <>
      <Hr />
      <section className="about-caldero">
        <div className="about-caldero__text">
          <h2>
            <span> {"caldero envios ?"}</span>
          </h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas
            possimus quasi fugiat amet? Ab quidem nihil nobis veniam placeat
            omnis suscipit earum perspiciatis enim, consequatur totam est,
            asperiores at alias.
          </p>
        </div>

        <div className="about-caldero__values">
          <CoreValues />
          <CoreValues />
          <CoreValues />
        </div>
      </section>
    </>
  );
};
