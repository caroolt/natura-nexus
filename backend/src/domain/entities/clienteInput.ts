interface ClienteInput {
  revendedora_id: number
  nome: string
  telefone: string
  email: string
  preferencias_produtos?: string
  historico_compras?: string
  data_primeiro_contato?: Date
  status: 'ativo' | 'inativo'
}

export default ClienteInput
