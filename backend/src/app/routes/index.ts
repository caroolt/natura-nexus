import type { FastifyInstance } from 'fastify'
import revendedoraRoutes from './revendedoraRoutes'

export async function registerRoutes(app: FastifyInstance) {
  app.register(revendedoraRoutes, { prefix: '/revendedoras' })
}
