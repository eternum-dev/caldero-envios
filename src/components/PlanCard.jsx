import "./planCard.css";
import PropTypes from "prop-types";

export const PlanCard = ({ namePlan = "S", valuePlan = "4000" }) => {
  return (
    <article className="plan-card">
      <header className="plan-card__header">
        <h3>
          <span>{"Plan"}</span>
          {namePlan}
        </h3>
        <h4 className="plan-card__price">{"500"}</h4>
        <p>
          <span>$</span>
          {valuePlan}
        </p>
      </header>
      <div className="plan-card__footer">
        <button className="plan-card__button">{"Adquirir"}</button>
      </div>
    </article>
  );
};

PlanCard.propTypes = {
  namePlan: PropTypes.string,
  valuePlan: PropTypes.string,
};
