module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('METRICAS', [
      {
        revendedora_id: 1,
        data: new Date(),
        numero_interacoes: 150,
        taxa_conversao: 5.00,
        engajamento_links: 100,
        total_vendas: 300.00,
        produtos_mais_vendidos: 'Perfume Essência',
        ticket_medio: 150.00
      },
      {
        revendedora_id: 2,
        data: new Date(),
        numero_interacoes: 80,
        taxa_conversao: 4.00,
        engajamento_links: 50,
        total_vendas: 200.00,
        produtos_mais_vendidos: 'Base de Maquiagem',
        ticket_medio: 100.00
      },
      {
        revendedora_id: 1,
        data: new Date(),
        numero_interacoes: 200,
        taxa_conversao: 6.50,
        engajamento_links: 150,
        total_vendas: 400.00,
        produtos_mais_vendidos: 'Batom Matte',
        ticket_medio: 175.00
      },
      {
        revendedora_id: 2,
        data: new Date(),
        numero_interacoes: 120,
        taxa_conversao: 5.00,
        engajamento_links: 80,
        total_vendas: 300.00,
        produtos_mais_vendidos: 'Hidratante Corporal',
        ticket_medio: 130.00
      }
    ]);
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('METRICAS', null, {});
  }
};
