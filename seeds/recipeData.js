const { Recipe } = require('../models');

const recipeData = [
    {
        recipe_name: 'Honey Mustard Chicken',
        time: '30min',
        user_id: 1,
    }
]

const seedRecipe = () => Recipe.bulkCreate(recipeData);

module.exports = seedRecipe;
