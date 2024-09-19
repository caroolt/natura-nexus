module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('VENDAS', [
      {
        revendedora_id: 1,
        cliente_id: 1,
        data_venda: new Date(),
        total_vendido: 150.00,
        ticket_medio: 75.00,
        feedback_clientes: 'Excelente atendimento',
        status: 'concluída'
      },
      {
        revendedora_id: 2,
        cliente_id: 2,
        data_venda: new Date(),
        total_vendido: 200.00,
        ticket_medio: 100.00,
        feedback_clientes: 'Entrega rápida',
        status: 'concluída'
      },
      {
        revendedora_id: 1,
        cliente_id: 3,
        data_venda: new Date(),
        total_vendido: 100.00,
        ticket_medio: 50.00,
        feedback_clientes: 'Bom preço',
        status: 'pendente'
      },
      {
        revendedora_id: 2,
        cliente_id: 4,
        data_venda: new Date(),
        total_vendido: 250.00,
        ticket_medio: 125.00,
        feedback_clientes: 'Produto excelente',
        status: 'concluída'
      }
    ]);
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('VENDAS', null, {});
  }
};
