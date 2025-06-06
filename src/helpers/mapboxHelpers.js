/**
 * Fetches a driving route geometry between two coordinates using the Mapbox Directions API.
 *
 * @async
 * @function getRoute
 * @param {[number, number]} start - The starting coordinates as a tuple [longitude, latitude].
 * @param {[number, number]} end - The destination coordinates as a tuple [longitude, latitude].
 * @param {string} token - The Mapbox access token required for authentication.
 * @returns {Promise<Object>} A Promise that resolves to a GeoJSON geometry object representing the route.
 *
 * @throws {Error} Will throw an error if the fetch fails or the response is malformed.
 *
 * @example
 * const start = [-73.985664, 40.748514];
 * const end = [-73.985130, 40.758896];
 * const geometry = await getRoute(start, end, 'your_mapbox_token');
 */

export const getRoute = async (start, end, token) => {
  const response = await fetch(
    `https://api.mapbox.com/directions/v5/mapbox/driving/${start[0]},${start[1]};${end[0]},${end[1]}?geometries=geojson&access_token=${token}`
  );
  const data = await response.json();

  return data.routes[0].geometry;
};
