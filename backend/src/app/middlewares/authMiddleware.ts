import type { FastifyRequest, FastifyReply } from 'fastify'
import jwt from 'jsonwebtoken'
import type JwtPayload from '../../domain/entities/jwtPayload'
import { env } from '../../infra/config/env'

const JWT_SECRET = env.JWT_SECRET

const authMiddleware = async (request: FastifyRequest, reply: FastifyReply) => {
  // biome-ignore lint/complexity/useLiteralKeys: <explanation>
  const token = request.headers['authorization']

  if (!token) {
    return reply.status(401).send({ error: 'Token não fornecido' })
  }

  try {
    const decoded = jwt.verify(token.split(' ')[1], JWT_SECRET)

    request.user = decoded
  } catch (error) {
    return reply.status(401).send({ error: 'Token inválido' })
  }
}

export default authMiddleware
