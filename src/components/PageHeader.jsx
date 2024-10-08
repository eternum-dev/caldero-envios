import PropTypes from "prop-types";
import { Hr } from "./Hr";

export const PageHeader = ({ title }) => {
  return (
    <div className="pageHeader">
      <h1>{title}</h1>
      <Hr />
    </div>
  );
};

PageHeader.propTypes = {
  title: PropTypes.string.isRequired,
};
