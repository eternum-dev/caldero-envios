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
 * @param {string } props.height    - String with height value.
 * @param {string} props.justify    -  String with the position of the division.
 * @param {string} props.color      -  String with the color background .
 * @returns {JSX.Element} The rendered  line divider.
 */

export const Hr = ({ height = "2px", justify = "end", color = "#2c2c2c" }) => {
  return (
    <div
      className={"hr"}
      style={{
        "--justifySelf": justify,
        "--height": height,
        "--color-hr": color === false ? "#2c2c2c" : color,
      }}
    ></div>
  );
};

Hr.propTypes = {
  height: PropTypes.string,
  justify: PropTypes.string,
  color: PropTypes.string,
};
