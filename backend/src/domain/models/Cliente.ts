import { DataTypes, Model } from 'sequelize'
import { sequelize } from '../../infra/db'
import Revendedora from './Revendedora'

class Cliente extends Model {}

Cliente.init(
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
    nome: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    telefone: {
      type: DataTypes.STRING(20),
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING(255),
      validate: {
        isEmail: true,
      },
    },
    preferencias_produtos: {
      type: DataTypes.TEXT,
    },
    historico_compras: {
      type: DataTypes.TEXT,
    },
    data_primeiro_contato: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
    status: {
      type: DataTypes.STRING(20),
      allowNull: false,
      validate: {
        isIn: [['ativo', 'inativo']],
      },
    },
  },
  {
    sequelize,
    modelName: 'Cliente',
    tableName: 'Clientes',
    timestamps: false,
  }
)

export default Cliente
