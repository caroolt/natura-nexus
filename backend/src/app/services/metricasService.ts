import type MetricasInput from '../../domain/entities/metricasInput'
import Metricas from '../../domain/models/Metricas'

class MetricasService {
  async criarMetricas(data: Omit<MetricasInput, 'id'>) {
    try {
      const novaMetricas = await Metricas.create(data)
      return novaMetricas
      // biome-ignore lint/suspicious/noExplicitAny: <explanation>
    } catch (error: any) {
      throw new Error(`Erro ao criar métricas: ${error.message}`)
    }
  }

  async buscarMetricasPorRevendedora(revendedora_id: number) {
    try {
      return await Metricas.findAll({ where: { revendedora_id } })
      // biome-ignore lint/suspicious/noExplicitAny: <explanation>
    } catch (error: any) {
      throw new Error(`Erro ao buscar métricas: ${error.message}`)
    }
  }

  async buscarMetricasPorId(id: number) {
    return await Metricas.findByPk(id)
  }

  async atualizarMetricas(id: number, data: Partial<MetricasInput>) {
    const metricas = await Metricas.findByPk(id)
    if (!metricas) throw new Error('Métricas não encontradas')

    await metricas.update(data)
    return metricas
  }

  async deletarMetricas(id: number) {
    const metricas = await Metricas.findByPk(id)
    if (!metricas) throw new Error('Métricas não encontradas')

    await metricas.destroy()
    return { message: 'Métricas deletadas com sucesso' }
  }
}

export default new MetricasService()
