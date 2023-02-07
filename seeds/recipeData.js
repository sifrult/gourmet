const { Recipe } = require('../models');

const recipeData = [
    {
        name: 'Honey Mustard Chicken',
        ingredients: 'Chicken Breast, Honey, Mustard',
        instructions: 'Cook chicken, add honey and mustard',
        time: '30min',
        user_id: 1
    }
]

const seedRecipe = () => Recipe.bulkCreate(recipeData);

module.exports = seedRecipe;
