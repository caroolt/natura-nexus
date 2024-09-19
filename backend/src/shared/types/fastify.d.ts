import type { JwtPayload } from '../../domain/entities/jwtPayload'

declare module 'fastify' {
  interface FastifyRequest {
    user?: JwtPayload
  }
}
