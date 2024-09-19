import { DataTypes, Model } from 'sequelize'
import { sequelize } from '../../infra/db'

class Produto extends Model {}

Produto.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    nome: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    descricao: {
      type: DataTypes.TEXT,
    },
    preco: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
      validate: {
        min: 0,
      },
    },
  },
  {
    sequelize,
    modelName: 'Produto',
    tableName: 'Produtos',
    timestamps: false,
  }
)

export default Produto
