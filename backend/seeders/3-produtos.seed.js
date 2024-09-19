module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('PRODUTOS', [
      {
        nome: 'Perfume Essência',
        descricao: 'Perfume floral com notas de jasmim',
        preco: 150.00
      },
      {
        nome: 'Base de Maquiagem',
        descricao: 'Base de alta cobertura',
        preco: 90.00
      },
      {
        nome: 'Batom Matte',
        descricao: 'Batom com acabamento matte',
        preco: 35.00
      },
      {
        nome: 'Hidratante Corporal',
        descricao: 'Hidratante para pele seca',
        preco: 70.00
      }
    ]);
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('PRODUTOS', null, {});
  }
};
