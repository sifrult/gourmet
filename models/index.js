const User = require('./User');
const Recipe = require('./Recipe');
const Ingredient = require('./Ingredient');
const Instruction = require('./Instruction');
const Image = require('./Image');

// Relationship between User and Recipe
User.hasMany(Recipe, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});

Recipe.belongsTo(User, {
    foreignKey: 'user_id'
});

// Relationship between Recipe and Ingredient
Recipe.hasOne(Ingredient, {
    foreignKey: 'recipe_id',
    onDelete: 'CASCADE'
});

Ingredient.hasOne(Recipe, {
    foreignKey: 'recipe_id'
});

// Relationship between Recipe and Instruction
Recipe.hasOne(Instruction, {
    foreignKey: 'recipe_id',
    onDelete: 'CASCADE'
});

Instruction.hasOne(Recipe, {
    foreignKey: 'recipe_id'
});

// Relationship between Recipe and Image
Recipe.hasOne(Image, {
    foreignKey: 'recipe_id',
    onDelete: 'CASCADE'
});

Image.hasOne(Recipe, {
    foreignKey: 'recipe_id'
});

module.exports = { User, Recipe, Ingredient, Instruction, Image};
