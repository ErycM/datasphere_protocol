import { FastifyInstance } from "fastify";

export async function healthCheck(app: FastifyInstance) {
  app.get('/health-check', async (request, reply) => {

    const healthCheck = {
      status: "health"
    }

    return reply.send(healthCheck);
  
  });
  
}