interface MetricasInput {
  revendedora_id: number
  data: Date
  numero_interacoes: number
  taxa_conversao: number
  engajamento_links: number
  total_vendas: number
  produtos_mais_vendidos?: string
  ticket_medio: number
}

export default MetricasInput
