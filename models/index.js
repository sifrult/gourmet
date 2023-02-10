const User = require('./User');
const Tag = require('./Tag');
const Recipe = require('./Recipe');
const RecipeExtras = require('./RecipeExtras');
const Ingredient = require('./Ingredient');
const Instruction = require('./Instruction');

// Relationship between User and Recipe
User.hasMany(Recipe, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});

Recipe.belongsTo(User, {
    foreignKey: 'user_id'
});

// Relationship between Recipe and Tag
Recipe.belongsToMany(Tag, {
    through: {
        model: RecipeExtras,
        unique: false
    }
});

Tag.belongsToMany(Recipe, {
    through: {
        model: RecipeExtras,
        unique: false
    }
});

// Relationship between Recipe and Ingredient
Recipe.hasMany(Ingredient, {
    foreignKey: 'recipe_id',
    onDelete: 'CASCADE'
    // through: {
    //     model: RecipeExtras,
    //     unique: false
    // }
});

Ingredient.belongsTo(Recipe, {
    foreignKey: 'recipe_id'
    // through: {
    //     model: RecipeExtras,
    //     unique: false
    // }
})

// Relationship between Recipe and Instruction
Recipe.belongsToMany(Instruction, {
    through: {
        model: RecipeExtras,
        unique: false
    }
});

Instruction.belongsToMany(Recipe, {
    through: {
        model: RecipeExtras,
        unique: false
    }
})


module.exports = { User, Tag, Recipe, Ingredient, RecipeExtras, Instruction};
