export const getRoute = async (start, end, token) => {
  const response = await fetch(
    `https://api.mapbox.com/directions/v5/mapbox/driving/${start[0]},${start[1]};${end[0]},${end[1]}?geometries=geojson&access_token=${token}`
  );
  const data = await response.json();

  return data.routes[0].geometry;
};
