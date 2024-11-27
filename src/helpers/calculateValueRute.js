export const calculateValueRute = (distance, repartidor) => {
  let valueRute = 0;
  const { metrics } = repartidor;

  const findMetrics = metrics.find(
    (metric) => distance <= metric.distanceKilometers
  );
  valueRute = findMetrics.totalCost;

  return valueRute;
};
