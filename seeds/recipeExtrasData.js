const { RecipeExtras } = require('../models');

const RecipeExtraData = [
    {
        recipe_id: 1,
        ingredient_id: 1,
        tag_id: 1,
        instruction_id: 1,

    },
    {
        recipe_id: 2,
        ingredient_id: 2,
        tag_id: 2,
        instruction_id: 1
    }

]

const seedRecipeExtras = () => RecipeExtras.bulkCreate(RecipeExtraData);

module.exports = seedRecipeExtras;
