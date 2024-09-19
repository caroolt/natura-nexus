module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('CLIENTES', [
      {
        id: 1,
        revendedora_id: 1,
        nome: 'João Pereira',
        telefone: '977777777',
        email: 'joao@exemplo.com',
        preferencias_produtos: 'Perfumes, Cosméticos',
        historico_compras: 'Compra de R$150 em perfumes',
        data_primeiro_contato: new Date(),
        status: 'ativo'
      },
      {
        id: 2,
        revendedora_id: 2,
        nome: 'Carlos Oliveira',
        telefone: '966666666',
        email: 'carlos@exemplo.com',
        preferencias_produtos: 'Maquiagem, Cremes',
        historico_compras: 'Compra de R$200 em maquiagem',
        data_primeiro_contato: new Date(),
        status: 'ativo'
      },
      {
        id: 3,
        revendedora_id: 1,
        nome: 'Luiza Costa',
        telefone: '955555555',
        email: 'luiza@exemplo.com',
        preferencias_produtos: 'Perfumes, Cremes',
        historico_compras: 'Compra de R$100 em perfumes',
        data_primeiro_contato: new Date(),
        status: 'inativo'
      },
      {
        id: 4,
        revendedora_id: 2,
        nome: 'Paulo Santos',
        telefone: '944444444',
        email: 'paulo@exemplo.com',
        preferencias_produtos: 'Cosméticos, Maquiagem',
        historico_compras: 'Compra de R$250 em cosméticos',
        data_primeiro_contato: new Date(),
        status: 'ativo'
      }
    ]);
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('CLIENTES', null, {});
  }
};
