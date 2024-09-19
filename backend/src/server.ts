import fastify, { type FastifyInstance } from 'fastify'
import {
  serializerCompiler,
  validatorCompiler,
  type ZodTypeProvider,
} from 'fastify-type-provider-zod'
import { sequelize } from './infra/db'
import { registerRoutes } from './app/routes'

const app: FastifyInstance = fastify().withTypeProvider<ZodTypeProvider>()
app.setValidatorCompiler(validatorCompiler)
app.setSerializerCompiler(serializerCompiler)

app.addHook('onReady', async () => {
  try {
    await sequelize.authenticate()
    console.info('Conectado ao banco de dados com sucesso.')
  } catch (error) {
    console.error('Falha ao conectar ao banco de dados:', error)
    process.exit(1)
  }
})

registerRoutes(app)

const start = async () => {
  try {
    await app.listen({
      port: 3000,
    })
    console.info('Servidor rodando em http://localhost:3000')
  } catch (err) {
    console.error(err)
    process.exit(1)
  }
}

start()
