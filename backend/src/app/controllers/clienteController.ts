import type { FastifyRequest, FastifyReply } from 'fastify'
import ClienteService from '../services/clienteService'
import type ClienteInput from '../../domain/entities/clienteInput'

class ClienteController {
  async criar(request: FastifyRequest, reply: FastifyReply) {
    try {
      const novoCliente = await ClienteService.criarCliente(
        request.body as ClienteInput
      )
      reply.status(201).send(novoCliente)
      // biome-ignore lint/suspicious/noExplicitAny: <explanation>
    } catch (error: any) {
      reply.status(400).send({ error: error.message })
    }
  }

  async buscarPorId(request: FastifyRequest, reply: FastifyReply) {
    const { id } = request.params as { id: string }
    try {
      const cliente = await ClienteService.buscarClientePorId(Number(id))
      if (!cliente)
        return reply.status(404).send({ error: 'Cliente não encontrado' })
      reply.status(200).send(cliente)
      // biome-ignore lint/suspicious/noExplicitAny: <explanation>
    } catch (error: any) {
      reply.status(400).send({ error: error.message })
    }
  }

  async buscarClientesPorRevendedora(
    request: FastifyRequest,
    reply: FastifyReply
  ) {
    const { revendedora_id } = request.params as { revendedora_id: number }
    try {
      const clientes =
        await ClienteService.buscarClientesPorRevendedora(revendedora_id)
      reply.status(200).send(clientes)
      // biome-ignore lint/suspicious/noExplicitAny: <explanation>
    } catch (error: any) {
      reply.status(400).send({ error: error.message })
    }
  }

  async atualizar(request: FastifyRequest, reply: FastifyReply) {
    const { id } = request.params as { id: string }
    try {
      const clienteAtualizado = await ClienteService.atualizarCliente(
        Number(id),
        request.body as Partial<ClienteInput>
      )
      reply.status(200).send(clienteAtualizado)
      // biome-ignore lint/suspicious/noExplicitAny: <explanation>
    } catch (error: any) {
      reply.status(400).send({ error: error.message })
    }
  }

  async deletar(request: FastifyRequest, reply: FastifyReply) {
    const { id } = request.params as { id: string }
    try {
      const mensagem = await ClienteService.deletarCliente(Number(id))
      reply.status(200).send(mensagem)
      // biome-ignore lint/suspicious/noExplicitAny: <explanation>
    } catch (error: any) {
      reply.status(400).send({ error: error.message })
    }
  }
}

export default new ClienteController()
