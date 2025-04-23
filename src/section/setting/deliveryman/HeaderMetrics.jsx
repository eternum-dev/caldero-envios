import { CloseIcon } from "../../../components";
import PropTypes from "prop-types";

/**
 * Renders the header for the metrics section, displaying column titles
 * and a close icon for removing metrics.
 *
 * @component
 * @example
 * return <HeaderMetrics />;
 *
 * @returns {JSX.Element} The rendered `HeaderMetrics` component.
 */

export const HeaderMetrics = ({ isAdvanceMetrics = false, unit }) => {
  return (
    <div
      className={`headerMetrics ${
        isAdvanceMetrics && "headerMetrics__advance"
      }  `}
    >
      <span>{"unidad"}</span>
      <span>{`${unit} entre`}</span>
      <span>{"valor"}</span>
      {isAdvanceMetrics && (
        <span>
          <CloseIcon height="24" width="24" />
        </span>
      )}
    </div>
  );
};

HeaderMetrics.propTypes = {
  isAdvanceMetrics: PropTypes.bool,
  unit: PropTypes.string,
};
