const { Ingredient } = require('../models');

/* because of how index.js is set up, we need to add
recipe_id of the recipe we want to display it on */

const ingredientData = [
    {
      ingredient: ['Chicken', 'butter', 'milk'],
      recipe_id: 1
    },
     {
      ingredient: ['Baby bok choy', 'cilantro', 'garlic'],
      recipe_id: 2
     },
]

const seedIngredient = () => Ingredient.bulkCreate(ingredientData);

module.exports = seedIngredient;
