/*app.ts*/
import { metrics, trace } from '@opentelemetry/api';
import express, { Express } from 'express';
import { getOrders } from './metrics';
import opentelemetry from '@opentelemetry/api';

const myMeter = opentelemetry.metrics.getMeter(
  'instrumentation-scope-name',
  'instrumentation-scope-version',
);

const tracer = trace.getTracer('dice-server', '0.1.0');
const meter = metrics.getMeter('dice-server', '0.1.0');

const PORT: number = parseInt(process.env.PORT || '8080');
const app: Express = express();

app.get('/orders', (req, res) => {
  const attributes = { customer: 'frodo', environment: 'staging', code: 200, path: '/orders', http: 'GET' };
  res.send(JSON.stringify(getOrders(attributes)));
});

app.listen(PORT, () => {
  console.log(`Listening for requests on http://localhost:${PORT}`);
});
