import type { FastifyInstance } from 'fastify'
import RevendedoraController from '../controllers/revendedoraController'
import authMiddleware from '../middlewares/authMiddleware'

export default async function revendedoraRoutes(fastify: FastifyInstance) {
  // Rota para registrar uma nova revendedora
  fastify.post('/registrar', async (request, reply) => {
    return RevendedoraController.registrar(request, reply)
  })

  // Rota para login de revendedora
  fastify.post('/login', async (request, reply) => {
    return RevendedoraController.login(request, reply)
  })

  // Rota para buscar revendedora por ID - protegido por autenticação
  fastify.get(
    '/:id',
    { preHandler: authMiddleware },
    async (request, reply) => {
      return RevendedoraController.buscarPorId(request, reply)
    }
  )

  // Rota para atualizar revendedora por ID - protegido por autenticação
  fastify.put(
    '/:id',
    { preHandler: authMiddleware },
    async (request, reply) => {
      return RevendedoraController.atualizar(request, reply)
    }
  )

  // Rota para deletar revendedora por ID - protegido por autenticação
  fastify.delete(
    '/:id',
    { preHandler: authMiddleware },
    async (request, reply) => {
      return RevendedoraController.deletar(request, reply)
    }
  )
}
