### Descrição da Arquitetura e Estrutura de Pastas do Projeto Backend - NaturaNexus

A arquitetura **Clean Architecture** foi escolhida por oferecer uma separação clara de responsabilidades e garantir maior flexibilidade para futuras mudanças ou expansões. Além disso, o modelo **MVC (Model-View-Controller)** complementa essa abordagem ao definir uma estrutura bem-organizada para manipulação de dados e rotas, facilitando o entendimento e manutenção do código.

### Estrutura de Pastas

```bash
natura-nexus/
│
├── src/
│   ├── app/
│   │   ├── controllers/
│   │   ├── services/
│   │   ├── repositories/
│   │   ├── routes/
│   │   └── middlewares/
│   ├── domain/
│   │   ├── models/
│   │   └── entities/
│   ├── infra/
│   │   ├── db/
│   │   ├── config/
│   │   └── logging/
│   ├── shared/
│   │   ├── errors/
│   │   ├── validators/
│   │   ├── utils/
│   ├── tests/
│   └── server.ts
│
├── migrations/
├── jest.config.ts
├── tsconfig.json
└── package.json
```

#### Explicação de cada diretório:

1. **src/app/**:
   - **controllers/**: Define as funções que manipulam as requisições HTTP. Aqui estão as regras de como as requisições serão respondidas, chamando os serviços necessários e retornando os resultados.
   - **services/**: Camada de lógica de negócios. Aqui estão as funções que lidam com as regras de negócios da aplicação, separando a lógica das regras das interações com a camada de dados.
   - **repositories/**: Acessa e manipula os dados no banco de dados. Esta camada encapsula a lógica de acesso aos dados, oferecendo uma interface para a camada de serviços.
   - **routes/**: Define as rotas da API, conectando endpoints HTTP com os controladores adequados.
   - **middlewares/**: Contém funções de middleware para manipulação de requisições antes de chegarem aos controladores. Exemplos de middlewares incluem autenticação, validação e rate-limiting.

2. **src/domain/**:
   - **models/**: Define os modelos de dados utilizados pelo Sequelize para interagir com o banco de dados.
   - **entities/**: Contém definições de entidades de negócios (objetos que representam conceitos da lógica do negócio, como Consultora e Cliente).

3. **src/infra/**:
   - **db/**: Configuração e inicialização do banco de dados, além de scripts relacionados à conexão e transações.
   - **config/**: Contém arquivos de configuração, como variáveis de ambiente e configuração do JWT.
   - **logging/**: Configuração e lógica para geração de logs usando a biblioteca `winston`.

4. **src/shared/**:
   - **errors/**: Manipulação centralizada de erros da aplicação, incluindo tratamento de exceções e erros comuns, como `404` ou `500`.
   - **validators/**: Validações de dados, utilizando a biblioteca `zod` para garantir a integridade das entradas de dados.
   - **utils/**: Funções utilitárias que podem ser reutilizadas em diversas partes do sistema.

5. **src/tests/**: Contém testes unitários e de integração, utilizando Jest para garantir que as funções e serviços estejam funcionando corretamente.

6. **migrations/**: Scripts de migração de banco de dados, gerenciados pelo `sequelize-cli`.

7. **server.ts**: O arquivo principal que inicializa o servidor Fastify, configura as rotas e middleware.

---

### Tecnologias Utilizadas e Justificativas

- **Fastify**: Framework web altamente performático, usado para construir a API REST de maneira eficiente. Ele foi escolhido por ser rápido, seguro e flexível.
- **Sequelize**: ORM (Object-Relational Mapping) utilizado para manipular o banco de dados relacional (PostgreSQL, MySQL, etc.) de forma mais simples e sem a necessidade de escrever SQL diretamente.
- **zod**: Biblioteca de validação de dados, garantindo que as entradas do usuário sejam validadas antes de serem processadas.
- **fastify-rate-limit**: Limita a quantidade de requisições feitas a API, prevenindo ataques DDoS.

### Autenticação e Autorização

- **Autenticação com JWT**: Após o login bem-sucedido da consultora, um token JWT é gerado e retornado. Esse token será incluído no cabeçalho `Authorization` das requisições subsequentes para acessar rotas protegidas.
- **Autorização**: O middleware verifica o token JWT nas requisições e garante que apenas usuários autenticados possam acessar certas rotas (como as de monitoramento de métricas ou cadastro de clientes).

### Segurança

1. **Criptografia de senhas**: As senhas das consultoras são criptografadas com `bcryptjs`, garantindo que, mesmo em caso de vazamento de dados, as senhas permaneçam seguras.
2. **Proteção contra SQL Injection**: Utilizando o Sequelize para manipulação do banco de dados, o sistema está protegido contra injeções de SQL.
3. **XSS e CSRF**: A biblioteca `helmet` é utilizada para configurar headers HTTP que previnem ataques de XSS e outras vulnerabilidades comuns.

### Passo a Passo para Configuração

1. **Clone o repositório**:
   ```bash
   git clone https://github.com/usuario/natura-nexus.git
   cd natura-nexus
   ```

2. **Configure as variáveis de ambiente**:
3. **Instale as dependências**:
   ```bash
   npm install
   ```
4. **Execute as migrações do banco de dados**:
   ```bash
   npx sequelize-cli db:migrate
   ```

5. **Inicie o servidor**:
   ```bash
   npm run dev
   ```
6. **Rodar testes**:
   ```bash
   npm run test
   ```