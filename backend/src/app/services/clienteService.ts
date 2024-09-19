import type ClienteInput from '../../domain/entities/clienteInput'
import Cliente from '../../domain/models/Cliente'

class ClienteService {
  async criarCliente(data: Omit<ClienteInput, 'id'>) {
    try {
      const novoCliente = await Cliente.create(data)
      return novoCliente
      // biome-ignore lint/suspicious/noExplicitAny: <explanation>
    } catch (error: any) {
      throw new Error(`Erro ao criar cliente: ${error.message}`)
    }
  }

  async buscarClientePorId(id: number) {
    return await Cliente.findByPk(id)
  }

  async atualizarCliente(id: number, data: Partial<ClienteInput>) {
    const cliente = await Cliente.findByPk(id)
    if (!cliente) throw new Error('Cliente não encontrado')

    await cliente.update(data)
    return cliente
  }

  async deletarCliente(id: number) {
    const cliente = await Cliente.findByPk(id)
    if (!cliente) throw new Error('Cliente não encontrado')

    await cliente.destroy()
    return { message: 'Cliente deletado com sucesso' }
  }

  async buscarClientesPorRevendedora(revendedoraId: number) {
    const clientes = await Cliente.findAll({
      where: { revendedora_id: revendedoraId },
    })
    return clientes
  }
}

export default new ClienteService()
