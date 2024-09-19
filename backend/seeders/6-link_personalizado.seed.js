module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('LINKS_PERSONALIZADOS', [
      {
        revendedora_id: 1,
        titulo: 'Promoção de Perfumes',
        link_destino: 'https://example.com/perfumes',
        link_gerado: 'https://example.com/maria-perfumes',
        data_criacao: new Date(),
        numero_cliques: 100
      },
      {
        revendedora_id: 2,
        titulo: 'Promoção de Maquiagem',
        link_destino: 'https://example.com/maquiagem',
        link_gerado: 'https://example.com/ana-maquiagem',
        data_criacao: new Date(),
        numero_cliques: 50
      },
      {
        revendedora_id: 1,
        titulo: 'Promoção de Cremes',
        link_destino: 'https://example.com/cremes',
        link_gerado: 'https://example.com/maria-cremes',
        data_criacao: new Date(),
        numero_cliques: 150
      },
      {
        revendedora_id: 2,
        titulo: 'Promoção de Batons',
        link_destino: 'https://example.com/batons',
        link_gerado: 'https://example.com/ana-batons',
        data_criacao: new Date(),
        numero_cliques: 200
      }
    ]);
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('LINKS_PERSONALIZADOS', null, {});
  }
};
