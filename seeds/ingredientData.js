const { Ingredient } = require('../models');

/* because of how index.js is set up, we need to add
recipe_id of the recipe we want to display it on */

const ingredientData = [
    {
      name: 'Chicken',
      recipe_id: 1
    },
    {
      name: 'Butter',
      recipe_id: 1
     },
     {
       name: 'Milk',
       recipe_id: 1
     },
     {
        name: 'Mustard', 
        recipe_id: 1
     }
]

const seedIngredient = () => Ingredient.bulkCreate(ingredientData);

module.exports = seedIngredient;
