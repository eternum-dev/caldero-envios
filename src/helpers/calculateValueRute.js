export const calculateValueRute = (distance, repartidor) => {
  let valueRute = 0;
  const { metrics } = repartidor;

  const findMetrics = metrics.find((metric) =>
    metric.distanceKilometers <= distance
      ? metric
      : metrics[0]
  );
  valueRute = findMetrics.totalCost;

  return valueRute;
};
