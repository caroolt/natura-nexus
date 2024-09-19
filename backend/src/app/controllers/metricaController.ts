import type { FastifyRequest, FastifyReply } from 'fastify'
import metricasService from '../services/metricasService'
import type MetricasInput from '../../domain/entities/metricasInput'

class MetricasController {
  async criarMetricas(request: FastifyRequest, reply: FastifyReply) {
    try {
      const novaMetricas = await metricasService.criarMetricas(
        request.body as MetricasInput
      )
      reply.status(201).send(novaMetricas)
      // biome-ignore lint/suspicious/noExplicitAny: <explanation>
    } catch (error: any) {
      reply.status(400).send({ error: error.message })
    }
  }

  async buscarPorId(request: FastifyRequest, reply: FastifyReply) {
    const { id } = request.params as { id: string }
    try {
      const metricas = await metricasService.buscarMetricasPorId(Number(id))
      if (!metricas)
        return reply.status(404).send({ error: 'Métricas não encontradas' })
      reply.status(200).send(metricas)
      // biome-ignore lint/suspicious/noExplicitAny: <explanation>
    } catch (error: any) {
      reply.status(400).send({ error: error.message })
    }
  }

  async atualizar(request: FastifyRequest, reply: FastifyReply) {
    const { id } = request.params as { id: string }
    try {
      const metricasAtualizadas = await metricasService.atualizarMetricas(
        Number(id),
        request.body as Partial<MetricasInput>
      )
      reply.status(200).send(metricasAtualizadas)
      // biome-ignore lint/suspicious/noExplicitAny: <explanation>
    } catch (error: any) {
      reply.status(400).send({ error: error.message })
    }
  }

  async deletar(request: FastifyRequest, reply: FastifyReply) {
    const { id } = request.params as { id: string }
    try {
      const mensagem = await metricasService.deletarMetricas(Number(id))
      reply.status(200).send(mensagem)
      // biome-ignore lint/suspicious/noExplicitAny: <explanation>
    } catch (error: any) {
      reply.status(400).send({ error: error.message })
    }
  }

  async buscarPorRevendedora(request: FastifyRequest, reply: FastifyReply) {
    const { revendedora_id } = request.params as { revendedora_id: string }
    try {
      const metricas = await metricasService.buscarMetricasPorRevendedora(
        Number(revendedora_id)
      )
      if (!metricas || metricas.length === 0)
        return reply
          .status(404)
          .send({ error: 'Métricas não encontradas para esta revendedora' })
      reply.status(200).send(metricas)
      // biome-ignore lint/suspicious/noExplicitAny: <explanation>
    } catch (error: any) {
      reply.status(400).send({ error: error.message })
    }
  }
}

export default new MetricasController()
