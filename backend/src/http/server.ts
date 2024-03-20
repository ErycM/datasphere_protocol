import fastify from 'fastify';
import multipart from 'fastify-multipart';
import { contract } from './routes/contract';
import { healthCheck } from './routes/health-check';

const app = fastify(); 
app.register(multipart);

app.register(healthCheck);
app.register(contract);

app.listen({ port: 3333}).then(() => {
  console.log("HTTP server running!")
});