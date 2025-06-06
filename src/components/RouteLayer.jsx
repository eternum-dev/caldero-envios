import { Source, Layer } from "react-map-gl/mapbox";
import PropTypes from "prop-types";

/**
 * RouteLayer component renders a route on the map using Mapbox GL.
 *
 * @component
 * @param {Object} props
 * @param {Object} props.route - GeoJSON data representing the route geometry.
 * @returns {JSX.Element|null} A route line layer if route is provided, otherwise null.
 */

export const RouteLayer = ({ route }) => {
  if (!route) return null;

  return (
    <Source id="route" type="geojson" data={route}>
      <Layer
        id="route-line"
        type="line"
        paint={{
          "line-color": "#3b9ddd",
          "line-width": 5,
          "line-opacity": 0.8,
        }}
        layout={{
          "line-cap": "round",
          "line-join": "round",
        }}
      />
    </Source>
  );
};

RouteLayer.propTypes = {
  route: PropTypes.shape({
    type: PropTypes.string.isRequired,
    geometry: PropTypes.shape({
      type: PropTypes.string.isRequired,
      coordinates: PropTypes.arrayOf(PropTypes.array).isRequired,
    }).isRequired,
  }),
};
