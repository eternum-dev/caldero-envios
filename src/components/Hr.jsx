import PropTypes from "prop-types";
import "./hr.css";

/**
 * Hr  component.
 *
 * This component represents  a line for a change of topic in the sections
 *
 * @component
 * @example
 * //default
 * return (
 *   <Hr />
 * )
 *
 * @example
 * //custom
 * return (
 *   <Hr
 *       size={"3px"}
 *       justify={"center"}
 *   />
 * )
 *
 * @param {object} props            - The component's props.
 * @param {string } props.height     - String with height value.
 * @param {string} props.justify   -  String with the position of the division.
 * @returns {JSX.Element} The rendered  line divider.
 */

export const Hr = ({ height = "2px", justify = "end" }) => {
  return (
    <div
      className={"hr"}
      style={{
        "--justifySelf": justify,
        "--height": height,
      }}
    ></div>
  );
};

Hr.propTypes = {
  height: PropTypes.string,
  justify: PropTypes.string,
};
