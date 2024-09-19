module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('VENDA_PRODUTOS', [
      {
        venda_id: 1,
        produto_id: 1,
        quantidade: 2
      },
      {
        venda_id: 2,
        produto_id: 2,
        quantidade: 1
      },
      {
        venda_id: 3,
        produto_id: 3,
        quantidade: 3
      },
      {
        venda_id: 4,
        produto_id: 4,
        quantidade: 1
      }
    ]);
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('VENDA_PRODUTOS', null, {});
  }
};
