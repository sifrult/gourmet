const User = require('./User');
const Tag = require('./Tag');
const Recipe = require('./Recipe');

User.hasMany(Recipe, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});

Recipe.belongsTo(User, {
    foreignKey: 'user_id'
})

Recipe.hasMany(Tag, {
    foreignKey: 'recipe_id',
    onDelete: 'CASCADE'
})

Tag.belongsTo(Recipe, {
    foreignKey: 'recipe_id'
})

module.exports = { User, Tag, Recipe};
