const User = require('./User');
const Tag = require('./Tag');
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

// Relationship between Recipe and Tag
Recipe.hasMany(Tag, {
    foreignKey: 'recipe_id',
    onDelete: 'CASCADE'
});

Tag.belongsTo(Recipe, {
    foreignKey: 'recipe_id'
});

// Relationship between Recipe and Ingredient
Recipe.hasMany(Ingredient, {
    foreignKey: 'recipe_id',
    onDelete: 'CASCADE'
});

Ingredient.belongsTo(Recipe, {
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

module.exports = { User, Tag, Recipe, Ingredient, Instruction, Image};

