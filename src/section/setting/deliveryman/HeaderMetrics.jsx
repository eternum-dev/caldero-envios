import { CloseIcon } from "../../../components";

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

export const HeaderMetrics = () => {
  return (
    <div className="headerMetrics">
      <span>{"metros  entre"}</span>
      <span>{"valor"}</span>
      <span>
        <CloseIcon height="24" width="24" />
      </span>
    </div>
  );
};
