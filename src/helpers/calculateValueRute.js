export const calculateValueRute = (distance, repartidor) => {
  let valueRute = 0;
  const { metrics } = repartidor;

  const findMetrics = metrics.find(
    (metric) => metric.distanceKilometers <= distance
  );
  valueRute = findMetrics.totalCost;

  return valueRute;
};
