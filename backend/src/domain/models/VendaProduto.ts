import { DataTypes, Model } from 'sequelize'
import { sequelize } from '../../infra/db'
import Venda from './Venda'
import Produto from './Produto'

class VendaProduto extends Model {}

VendaProduto.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    venda_id: {
      type: DataTypes.INTEGER,
      references: {
        model: Venda,
        key: 'id',
      },
    },
    produto_id: {
      type: DataTypes.INTEGER,
      references: {
        model: Produto,
        key: 'id',
      },
    },
    quantidade: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        min: 1,
      },
    },
  },
  {
    sequelize,
    modelName: 'VendaProduto',
    tableName: 'Venda_Produtos',
    timestamps: false,
  }
)

export default VendaProduto
