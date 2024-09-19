import type { FastifyRequest, FastifyReply } from 'fastify'
import RevendedoraService from '../services/revendedoraService'
import type RevendedoraInput from '../../domain/entities/revendedoraInput'
import type RevendedoraLogin from '../../domain/entities/revendedoraLogin'

class RevendedoraController {
  async registrar(request: FastifyRequest, reply: FastifyReply) {
    try {
      const novaRevendedora = await RevendedoraService.criarRevendedora(
        request.body as RevendedoraInput
      )
      reply.status(201).send(novaRevendedora)
      // biome-ignore lint/suspicious/noExplicitAny: <explanation>
    } catch (error: any) {
      reply.status(400).send({ error: error.message })
    }
  }

  async login(request: FastifyRequest, reply: FastifyReply) {
    const { email, senha } = request.body as RevendedoraLogin
    try {
      const { token, revendedora } = await RevendedoraService.login(
        email,
        senha
      )
      reply.status(200).send({ token, revendedora })
      // biome-ignore lint/suspicious/noExplicitAny: <explanation>
    } catch (error: any) {
      reply.status(400).send({ error: error.message })
    }
  }

  async buscarPorId(request: FastifyRequest, reply: FastifyReply) {
    const { id } = request.params as { id: string }
    try {
      const revendedora = await RevendedoraService.buscarRevendedoraPorId(
        Number(id)
      )
      if (!revendedora)
        return reply.status(404).send({ error: 'Revendedora não encontrada' })
      reply.status(200).send(revendedora)
      // biome-ignore lint/suspicious/noExplicitAny: <explanation>
    } catch (error: any) {
      reply.status(400).send({ error: error.message })
    }
  }

  async atualizar(request: FastifyRequest, reply: FastifyReply) {
    const { id } = request.params as { id: string }
    try {
      const revendedoraAtualizada =
        await RevendedoraService.atualizarRevendedora(
          Number(id),
          request.body as Partial<RevendedoraInput>
        )
      reply.status(200).send(revendedoraAtualizada)
      // biome-ignore lint/suspicious/noExplicitAny: <explanation>
    } catch (error: any) {
      reply.status(400).send({ error: error.message })
    }
  }

  async deletar(request: FastifyRequest, reply: FastifyReply) {
    const { id } = request.params as { id: string }
    try {
      const mensagem = await RevendedoraService.deletarRevendedora(Number(id))
      reply.status(200).send(mensagem)
      // biome-ignore lint/suspicious/noExplicitAny: <explanation>
    } catch (error: any) {
      reply.status(400).send({ error: error.message })
    }
  }
}

export default new RevendedoraController()
