import { Source, Layer } from "react-map-gl/mapbox";


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

