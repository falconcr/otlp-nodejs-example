/*dice.ts*/
import { trace, metrics } from '@opentelemetry/api';

const tracer = trace.getTracer('dice-lib');
const meter = metrics.getMeter('dice-lib');

const counter = meter.createCounter('falcone');

export function getOrders(labels: {}) {
  counter.add(1, labels);
  return "List of orders";
}
