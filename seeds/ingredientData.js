const { Ingredient } = require('../models');

const ingredientData = [
    {
        ingredient: 'Chicken'
    },
    {
        ingredient: 'Butter'
    },
    {
        ingredient: 'Milk'
    },
    {
        ingredient: 'Mustard'
    }
]

const seedIngredient = () => Ingredient.bulkCreate(ingredientData);

module.exports = seedIngredient;
