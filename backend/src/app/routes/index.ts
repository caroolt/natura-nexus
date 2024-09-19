import type { FastifyInstance } from 'fastify'
import revendedoraRoutes from './revendedoraRoutes'
import clienteRoutes from './clienteRoutes'
import metricasRoutes from './metricasRoutes'

export async function registerRoutes(app: FastifyInstance) {
  app.register(revendedoraRoutes, { prefix: '/revendedoras' })
  app.register(clienteRoutes, { prefix: '/clientes' })
  app.register(metricasRoutes, { prefix: '/metricas' })
}
