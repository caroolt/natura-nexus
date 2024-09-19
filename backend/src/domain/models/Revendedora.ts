import { DataTypes, Model } from 'sequelize'
import { sequelize } from '../../infra/db'

class Revendedora extends Model {}

Revendedora.init(
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
    email: {
      type: DataTypes.STRING(255),
      allowNull: false,
      unique: true,
    },
    telefone: {
      type: DataTypes.STRING(20),
      allowNull: false,
      unique: true,
    },
    senha: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    data_cadastro: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
    foto: {
      type: DataTypes.BLOB,
    },
    link_cadastro_cliente: {
      type: DataTypes.STRING(255),
    },
  },
  {
    sequelize,
    modelName: 'REVENDEDORAS',
    tableName: 'REVENDEDORAS',
    timestamps: false,
  }
)

export default Revendedora
