import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import Revendedora from '../../domain/models/Revendedora'
import { env } from '../../infra/config/env'
import type RevendedoraInput from '../../domain/entities/revendedoraInput'
const JWT_SECRET = env.JWT_SECRET

class RevendedoraService {
  private gerarLinkCadastro(email: string): string {
    return `https://naturanexus.com/cadastro/${encodeURIComponent(email)}`
  }
  async criarRevendedora(data: RevendedoraInput) {
    const { nome, email, telefone, senha } = data
    const senhaHash = await bcrypt.hash(senha, 10)

    const linkCadastroCliente = this.gerarLinkCadastro(email)
    try {
      const novaRevendedora = await Revendedora.create({
        nome,
        email,
        telefone,
        senha: senhaHash,
        link_cadastro_cliente: linkCadastroCliente,
      })

      return novaRevendedora
      // biome-ignore lint/suspicious/noExplicitAny: <explanation>
    } catch (error: any) {
      throw new Error(`Erro ao criar revendedora: ${error.message}`)
    }
  }

  async login(email: string, senha: string) {
    const revendedora = await Revendedora.findOne({ where: { email: email } })

    if (!revendedora) throw new Error('Revendedora não encontrada')

    const senhaValida = await bcrypt.compare(
      senha,
      revendedora.getDataValue('senha')
    )
    if (!senhaValida) throw new Error('Senha inválida')

    const token = jwt.sign(
      {
        id: revendedora.getDataValue('id'),
        email: revendedora.getDataValue('email'),
      },
      JWT_SECRET,
      { expiresIn: '1h' }
    )
    return { token, revendedora }
  }

  async buscarRevendedoraPorId(id: number) {
    return await Revendedora.findByPk(id)
  }

  async atualizarRevendedora(id: number, data: Partial<RevendedoraInput>) {
    const revendedora = await Revendedora.findByPk(id)
    if (!revendedora) throw new Error('Revendedora não encontrada')

    if (data.senha) {
      data.senha = await bcrypt.hash(data.senha, 10)
    }

    await revendedora.update(data)
    return revendedora
  }

  async deletarRevendedora(id: number) {
    const revendedora = await Revendedora.findByPk(id)
    if (!revendedora) throw new Error('Revendedora não encontrada')

    await revendedora.destroy()
    return { message: 'Revendedora deletada com sucesso' }
  }
}

export default new RevendedoraService()
