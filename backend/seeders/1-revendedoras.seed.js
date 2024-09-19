const bcrypt = require('bcryptjs');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    // Define the plain text passwords
    const passwords = {
      'senha123': 'maria@exemplo.com',
      'senha456': 'ana@exemplo.com',
      'senha789': 'joana@exemplo.com',
      'senha101112': 'carla@exemplo.com'
    };

    // Hash the passwords
    const hashedPasswords = await Promise.all(
      Object.keys(passwords).map(async (plainPassword) => {
        return {
          password: await bcrypt.hash(plainPassword, 10),
          email: passwords[plainPassword]
        };
      })
    );

    // Insert data into the database with hashed passwords
    await queryInterface.bulkInsert('REVENDEDORAS', [
      {
        nome: 'Maria Silva',
        email: 'maria@exemplo.com',
        telefone: '999999999',
        senha: hashedPasswords.find(p => p.email === 'maria@exemplo.com').password,
        data_cadastro: new Date(),
        foto: null,
        link_cadastro_cliente: `https://naturanexus.com/cadastro/${encodeURIComponent('maria@exemplo.com')}`
      },
      {
        nome: 'Ana Souza',
        email: 'ana@exemplo.com',
        telefone: '988888888',
        senha: hashedPasswords.find(p => p.email === 'ana@exemplo.com').password,
        data_cadastro: new Date(),
        foto: null,
        link_cadastro_cliente: `https://naturanexus.com/cadastro/${encodeURIComponent('ana@exemplo.com')}`
      },
      {
        nome: 'Joana Lima',
        email: 'joana@exemplo.com',
        telefone: '977777777',
        senha: hashedPasswords.find(p => p.email === 'joana@exemplo.com').password,
        data_cadastro: new Date(),
        foto: null,
        link_cadastro_cliente: `https://naturanexus.com/cadastro/${encodeURIComponent('joana@exemplo.com')}`
      },
      {
        nome: 'Carla Oliveira',
        email: 'carla@exemplo.com',
        telefone: '966666666',
        senha: hashedPasswords.find(p => p.email === 'carla@exemplo.com').password,
        data_cadastro: new Date(),
        foto: null,
        link_cadastro_cliente: `https://naturanexus.com/cadastro/${encodeURIComponent('carla@exemplo.com')}`
      }
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('REVENDEDORAS', null, {});
  }
};
