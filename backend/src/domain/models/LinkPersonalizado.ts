import { DataTypes, Model } from 'sequelize'
import { sequelize } from '../../infra/db'
import Revendedora from './Revendedora'

class LinkPersonalizado extends Model {}

LinkPersonalizado.init(
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
    titulo: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    link_destino: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    link_gerado: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    data_criacao: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
    numero_cliques: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
    },
  },
  {
    sequelize,
    modelName: 'LinkPersonalizado',
    tableName: 'Links_Personalizados',
    timestamps: false,
  }
)

export default LinkPersonalizado
