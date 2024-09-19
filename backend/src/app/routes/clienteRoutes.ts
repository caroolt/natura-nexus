import type { FastifyInstance } from 'fastify'
import ClienteController from '../controllers/clienteController'
import authMiddleware from '../middlewares/authMiddleware'

export default async function clienteRoutes(fastify: FastifyInstance) {
  fastify.post('/', { preHandler: authMiddleware }, async (request, reply) => {
    return ClienteController.criar(request, reply)
  })

  fastify.get(
    '/:id',
    { preHandler: authMiddleware },
    async (request, reply) => {
      return ClienteController.buscarPorId(request, reply)
    }
  )

  fastify.get(
    '/revendedora/:revendedora_id',
    { preHandler: authMiddleware },
    async (request, reply) => {
      return ClienteController.buscarClientesPorRevendedora(request, reply)
    }
  )

  fastify.put(
    '/:id',
    { preHandler: authMiddleware },
    async (request, reply) => {
      return ClienteController.atualizar(request, reply)
    }
  )

  fastify.delete(
    '/:id',
    { preHandler: authMiddleware },
    async (request, reply) => {
      return ClienteController.deletar(request, reply)
    }
  )
}
