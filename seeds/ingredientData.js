const { Ingredient } = require('../models');

/* because of how index.js is set up, we need to add
recipe_id of the recipe we want to display it on */

const ingredientData = [
    {
      ingredient: 'Chicken',
      recipe_id: 1
    },
    {
      ingredient: 'Butter',
      recipe_id: 1
     },
     {
       ingredient: 'Milk',
       recipe_id: 1
     },
     {
        ingredient: 'Mustard',
        recipe_id: 1
     },
     {
      ingredient: 'Baby bok choy',
      recipe_id: 2
     },
     {
      ingredient: 'Cilantro',
      recipe_id: 2
     },
     {
      ingredient: 'Garlic',
      recipe_id: 2
     },
]

const seedIngredient = () => Ingredient.bulkCreate(ingredientData);

module.exports = seedIngredient;
