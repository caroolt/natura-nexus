import type { FastifyInstance } from 'fastify'
import authMiddleware from '../middlewares/authMiddleware'
import MetricasController from '../controllers/metricaController'
export default async function metricasRoutes(fastify: FastifyInstance) {
  // Rota para criar novas métricas
  fastify.post(
    '/metricas',
    { preHandler: authMiddleware },
    async (request, reply) => {
      return MetricasController.criarMetricas(request, reply)
    }
  )

  fastify.get(
    '/metricas/revendedora/:revendedora_id',
    { preHandler: authMiddleware },
    async (request, reply) => {
      return MetricasController.buscarPorRevendedora(request, reply)
    }
  )

  // Rota para buscar métricas por ID
  fastify.get(
    '/metricas/:id',
    { preHandler: authMiddleware },
    async (request, reply) => {
      return MetricasController.buscarPorId(request, reply)
    }
  )

  // Rota para atualizar métricas por ID
  fastify.put(
    '/metricas/:id',
    { preHandler: authMiddleware },
    async (request, reply) => {
      return MetricasController.atualizar(request, reply)
    }
  )

  // Rota para deletar métricas por ID
  fastify.delete(
    '/metricas/:id',
    { preHandler: authMiddleware },
    async (request, reply) => {
      return MetricasController.deletar(request, reply)
    }
  )
}
