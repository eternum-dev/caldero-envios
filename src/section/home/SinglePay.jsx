import { PlanCard } from "../../components";
import PropTypes from "prop-types";

export const SinglePay = ({ data = { title: "titulo", plancards: "" } }) => {
  return (
    <>
      <h2>{data.title} </h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum odio ex
        aperiam sit iste, sint excepturi dolore minima omnis dolores?
      </p>
      <section className="home-page__container single-pay">
        <PlanCard />
        <PlanCard />
        <PlanCard />
      </section>
    </>
  );
};

SinglePay.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string,
    PlanCard: PropTypes.objectOf(PropTypes.string),
  }),
};
