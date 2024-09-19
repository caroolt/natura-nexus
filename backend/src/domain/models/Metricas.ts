import { DataTypes, Model } from 'sequelize'
import { sequelize } from '../../infra/db'
import Revendedora from './Revendedora'

class Metricas extends Model {}

Metricas.init(
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
    data: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    numero_interacoes: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    taxa_conversao: {
      type: DataTypes.DECIMAL(5, 2),
      allowNull: false,
    },
    engajamento_links: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    total_vendas: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
    },
    produtos_mais_vendidos: {
      type: DataTypes.TEXT,
    },
    ticket_medio: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: 'Metricas',
    tableName: 'METRICAS',
    timestamps: false,
  }
)

export default Metricas
