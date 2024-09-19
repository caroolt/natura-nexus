import { Sequelize } from 'sequelize'
import { env } from '../config/env'

export const sequelize = new Sequelize({
  dialect: 'oracle',
  username: env.DB_USER,
  password: env.DB_PASSWORD,
  database: env.DB_NAME,
  host: env.DB_HOST,
  port: 1521,
  logging: console.log,
  dialectOptions: {
    connectTimeout: 60000,
  },
})
