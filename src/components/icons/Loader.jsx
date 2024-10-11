import "./loader.css";

/**
 * Loader SVG icon component.
 *
 * This component renders an SVG representing a loader circle.
 *
 * @component
 * @example 
 *  return (
 *   <Loader />
 * )
 *
 * @returns {JSX.Element} The rendered SVG hamburger icon.
 */

export const Loader = () => {
  return (
    <svg viewBox="25 25 50 50" className="loader">
      <circle className="loader__circle" r="20" cy="50" cx="50"></circle>
    </svg>
  );
};
