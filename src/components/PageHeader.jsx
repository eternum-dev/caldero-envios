import PropTypes from "prop-types";
import { Hr } from "./Hr";

/**
 * PageHeader component rendered the page title with a <Hr/> component
 *
 * @component
 * @example
 *
 *  return (
 *    <PageHeader title={"titulo"}/>
 *  )
 *
 * @param {object}   props      - The component's props.
 * @param {string} props.title  - Text that is rendered inside the header.
 *
 * @returns {JSX.Element} React component show title page.
 */

export const PageHeader = ({ title }) => {
  return (
    <header className="pageHeader">
      <h1>{title}</h1>
      <Hr />
    </header>
  );
};

PageHeader.propTypes = {
  title: PropTypes.string.isRequired,
};
