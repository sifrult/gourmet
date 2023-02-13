const { Tag } = require('../models');

const tagData = [
    {
        tag_name: 'Chicken',
        recipe_id: 1
    },
    {
        tag_name: 'Pork',
        recipe_id: 2
    },
    {
        tag_name: 'Vegetarian',
    },
]

const seedTag = () => Tag.bulkCreate(tagData);

module.exports = seedTag;
