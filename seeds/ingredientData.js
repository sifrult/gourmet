const { Ingredient } = require('../models');

const ingredientData = [
    {
      name: 'Chicken'
    },
    {
      name: 'Butter'
     },
     {
       name: 'Milk'
     },
     {
       name: 'Mustard'
     }
]

const seedIngredient = () => Ingredient.bulkCreate(ingredientData);

module.exports = seedIngredient;
