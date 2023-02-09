const sequelize = require('../config/connection');

const seedUser = require('./userData.js');
const seedRecipe = require('./recipeData');
const seedTag = require('./tagData');
const seedIngredient = require('./ingredientData');
const seedInstruction = require('./instructionData');
const seedRecipeExtras = require('./recipeExtrasData');

const seedAll = async () => {
  await sequelize.sync({ force: true});

  await seedUser();

  await seedRecipe();

  await seedTag();

  await seedIngredient();

  await seedInstruction();

  await seedRecipeExtras();

  process.exit(0);
}

seedAll();
