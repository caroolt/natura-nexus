import { DataTypes, Model } from 'sequelize'
import { sequelize } from '../../infra/db'
import Revendedora from './Revendedora'
import Cliente from './Cliente'

class Venda extends Model {}

Venda.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    revendedora_id: {
      type: DataTypes.INTEGER,
      references: {
        model: Revendedora,
        key: 'id',
      },
    },
    cliente_id: {
      type: DataTypes.INTEGER,
      references: {
        model: Cliente,
        key: 'id',
      },
    },
    data_venda: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
    total_vendido: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
    },
    ticket_medio: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
    },
    feedback_clientes: {
      type: DataTypes.TEXT,
    },
    status: {
      type: DataTypes.STRING(20),
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: 'Venda',
    tableName: 'Vendas',
    timestamps: false,
  }
)

export default Venda
