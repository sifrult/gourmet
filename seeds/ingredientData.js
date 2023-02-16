const { Ingredient } = require('../models');

/* because of how index.js is set up, we need to add
recipe_id of the recipe we want to display it on */

const ingredientData = [
    {
      ingredient: ['Chicken', 'butter', 'milk'],
      recipe_id: 1
    },
     {
      ingredient: [
        '8 baby bok choy',
        '7 cups chicken or vegetable broth',
        '1 bunch cilantro',
        '2 eggs',
        '4 cloves garlic',
        '2 pieces ginger root',
        '1 bunch green onion',
        '1.5 lb ground pork',
        'black pepper',
        'chili-garlic sauce',
        'soy sauce',
        'toasted sesame oil',
        'worcestershire sauce'
      ],
      recipe_id: 2
     },
]

const seedIngredient = () => Ingredient.bulkCreate(ingredientData);

module.exports = seedIngredient;
