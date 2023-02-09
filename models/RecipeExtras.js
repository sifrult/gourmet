const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class RecipeExtras extends Model {}

RecipeExtras.init({
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    recipe_id: {
        type: DataTypes.INTEGER,
        references: {
          model: 'recipe',
          key: 'id',
          unique: false
        }
    },
    ingredient_id: {
        type: DataTypes.INTEGER,
        references: {
          model: 'ingredients',
          key: 'id',
          unique: false
        }
    },
    tag_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'tag',
        key: 'id',
        unique: false
      }
  },
    instruction_id: {
        type: DataTypes.INTEGER,
        references: {
          model: 'instruction',
          key: 'id',
          unique: false
        }
    },
},
{
  sequelize,
  timestamps: false,
  freezeTableName: true,
  underscored: true,
  modelName: 'recipe_extras',
})

module.exports = RecipeExtras;
